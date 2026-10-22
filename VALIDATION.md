# Validation of this source snapshot

Prepared on 2026-10-22. Checks ran on Windows using existing local toolchains and installed dependencies, with imports directed at this exported copy. This is not a clean-room dependency-install test.

| Check | Result |
| --- | --- |
| static-build | passed |
| node-tests | passed |

The static build and 24 tests passed. Character archives start empty. Public wiki fields are retained; a privacy regression test creates its own private-field sentinel.

The repository contains selected main source, required small configuration/reference inputs and documentation. Installed dependencies, model weights, caches, private records and bulk research outputs are excluded. Reproduce the commands in README.md after installing the declared dependencies.
