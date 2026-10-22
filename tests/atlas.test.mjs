import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,readdir,stat,rm} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import vm from 'node:vm';
import {buildAtlas} from '../scripts/build-atlas.mjs';
test('atlas publishes declared images and public metadata, removing private and stale assets',async()=>{
 const root=await mkdtemp(path.join(os.tmpdir(),'roda-atlas-test-')),source=path.join(root,'web','atlas'),out=path.join(root,'dist');
 try{
  await mkdir(path.join(source,'art'),{recursive:true});await mkdir(path.join(source,'assets'),{recursive:true});await mkdir(path.join(out,'atlas','art'),{recursive:true});
  const files=['index.html','panduan.html','atlas.css','atlas.js','assets/brand.jpg','assets/cinzel.ttf','assets/cinzel-OFL.txt','assets/mark.svg','art/weapon-test.webp'];
  for(const f of files)await writeFile(path.join(source,f),f.endsWith('.html')?'<link href="atlas.css"><script src="catalog.js"></script>':'fixture');
  await writeFile(path.join(out,'atlas','art','old-private.webp'),'private');await writeFile(path.join(source,'art','draft-private.webp'),'private');
  const item={id:'weapon:test',kind:'weapon',label:'Test',privateNotes:'PRIVATE_SENTINEL',image:{asset:'art/weapon-test.webp',fullAsset:'art/weapon-test.webp',cellCode:'A1',privateNotes:'PRIVATE_SENTINEL'},previewImages:[{id:'weapon:test',label:'Preview',privateNotes:'PRIVATE_SENTINEL',image:{asset:'art/weapon-test.webp',privateNotes:'PRIVATE_SENTINEL'}}],descendantCount:1,depictionContext:{type:'historical-interpretation',label:'Sejarah',description:'Male historical interpretation',userApproved:true,privateNotes:'PRIVATE_SENTINEL'},canonicalContext:{label:'Fate/Grand Order',description:'Recorded game source',privateNotes:'PRIVATE_SENTINEL'},canonicalRef:{file:'content/weapon.json',id:'test',pointer:'/weapons/0',privateNotes:'PRIVATE_SENTINEL'},inspirationLinks:[{label:'Reference',url:'https://example.com/',privateNotes:'PRIVATE_SENTINEL'}]};
  await writeFile(path.join(source,'catalog.js'),'window.REFERENCE_CATALOG='+JSON.stringify({schemaVersion:1,version:'test',counts:{},entries:[item],privateNotes:'PRIVATE_SENTINEL'})+';');
  const result=await buildAtlas(root,out);assert.equal(result.entries,1);assert.equal(result.plates,1);
  const js=await readFile(path.join(out,'atlas','catalog.js'),'utf8');assert.ok(!js.includes('PRIVATE_SENTINEL'));const scope={window:{}};vm.runInNewContext(js,scope);assert.equal(scope.window.REFERENCE_CATALOG.localContract,false);
  const published=scope.window.REFERENCE_CATALOG.entries[0];assert.equal(published.depictionContext.userApproved,true);assert.equal(published.canonicalContext.label,'Fate/Grand Order');assert.equal(published.previewImages[0].image.asset,'art/weapon-test.webp');assert.equal(published.descendantCount,1);
  assert.deepEqual(await readdir(path.join(out,'atlas','art')),['weapon-test.webp']);const html=await readFile(path.join(out,'atlas','index.html'),'utf8');assert.ok(html.includes('atlas.css?v='+result.version));
  item.image.asset='../../escape.webp';await writeFile(path.join(source,'catalog.js'),'window.REFERENCE_CATALOG='+JSON.stringify({entries:[item]})+';');await assert.rejects(()=>buildAtlas(root,out),/Invalid public atlas asset/);
  item.image.asset='art/weapon-test.webp';item.previewImages[0].image.asset='../../escape.webp';await writeFile(path.join(source,'catalog.js'),'window.REFERENCE_CATALOG='+JSON.stringify({entries:[item]})+';');await assert.rejects(()=>buildAtlas(root,out),/Invalid public atlas asset/);
 }finally{if(!path.resolve(root).startsWith(path.resolve(os.tmpdir())+path.sep)||!path.basename(root).startsWith('roda-atlas-test-'))throw new Error('Unsafe test cleanup');await rm(root,{recursive:true,force:true});}
});
