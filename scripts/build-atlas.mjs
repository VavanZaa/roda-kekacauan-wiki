import {readFile,writeFile,mkdir,cp,rm,stat} from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
export async function buildAtlas(root,out){
 const source=path.join(root,'web','atlas');
 if(!(await stat(path.join(source,'index.html')).catch(()=>null)))return null;
 const target=path.join(out,'atlas');if(path.dirname(target)!==out)throw new Error('Unsafe atlas output');
 const raw=await readFile(path.join(source,'catalog.js'),'utf8'),scope={window:{}};vm.runInNewContext(raw,scope);
 const input=scope.window.REFERENCE_CATALOG;
 const fields=['id','kind','label','groupId','groupLabel','pathLabel','parentId','terminal','canonicalRef','route','visualBrief','displayBrief','inspiration','inspirationLinks','wikiUrl','image','previewImages','descendantCount','depictionContext','canonicalContext','renderPolicy','compositionWrapper','aliases','childIds'];
 const entries=input.entries.map(e=>Object.fromEntries(fields.filter(k=>e[k]!==undefined).map(k=>[k,e[k]])));
 const pick=(o,keys)=>Object.fromEntries(keys.filter(k=>o[k]!==undefined).map(k=>[k,o[k]]));
 const imageFields=['plateId','asset','fullAsset','columns','rows','column','row','cellIndex','cellCode','aspect','normalizedRegion','referenceStatus','sourceCredit','sourceUrl','referenceScope'];
 for(const e of entries){if(e.image)e.image=pick(e.image,imageFields);if(e.previewImages)e.previewImages=e.previewImages.map(p=>({...pick(p,['id','label']),image:pick(p.image,imageFields)}));if(e.depictionContext)e.depictionContext=pick(e.depictionContext,['type','label','description','userApproved']);if(e.canonicalContext)e.canonicalContext=pick(e.canonicalContext,['label','description']);if(e.canonicalRef)e.canonicalRef=pick(e.canonicalRef,['file','id','pointer']);if(e.inspirationLinks)e.inspirationLinks=e.inspirationLinks.map(s=>pick(s,['label','url']));}
 const catalog={schemaVersion:1,version:input.version,counts:input.counts,localContract:false,entries};
 const assets=[...new Set(entries.flatMap(e=>[e.image?.asset,...(e.previewImages??[]).map(p=>p.image?.asset)]).filter(Boolean))];
 if(assets.some(a=>!/^art\/[a-z0-9-]+\.webp$/.test(a)))throw new Error('Invalid public atlas asset');
 await rm(target,{recursive:true,force:true});await mkdir(target,{recursive:true});
 const files=['atlas.css','atlas.js','assets/brand.jpg','assets/cinzel.ttf','assets/cinzel-OFL.txt','assets/mark.svg',...assets];
 const version=createHash('sha256').update(JSON.stringify(catalog));
 for(const file of files){const data=await readFile(path.join(source,file));version.update(data);await mkdir(path.dirname(path.join(target,file)),{recursive:true});await writeFile(path.join(target,file),data);}
 const hash=version.digest('hex').slice(0,12);
 await writeFile(path.join(target,'catalog.js'),'window.REFERENCE_CATALOG='+JSON.stringify(catalog).replace(/</g,'\\u003c')+';\n');
 for(const file of ['index.html','panduan.html']){const html=(await readFile(path.join(source,file),'utf8')).replace(/(src|href)="(atlas\.js|catalog\.js|atlas\.css)"/g,(_,attr,name)=>`${attr}="${name}?v=${hash}"`);await writeFile(path.join(target,file),html);}
 return {entries:entries.length,plates:assets.length,version:hash};
}
