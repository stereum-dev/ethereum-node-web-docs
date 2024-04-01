## Creating a new Draft Release
The recommended way of creating a new Draft Release is with git. A commit Message with the tag [DRAFT] in the commit message will result in the following:

1. Version specified in launcher/package.json will be used as the release version (so be sure to update it!)
2. Application will be built for defined platforms ubuntu, windows and macos
3. Windows application will be signed with organisations digicert signing certificate using keylocker
4. MacOS application will be signed and notarized using the organisations Apple Account
5. A tag ${version}-draft will be set in git
6. Draft Release with Version (from package.json) will be created
7. Artifacts will be uploaded to the draft Release

```
git commit -m "New draft Release with artifacts [DRAFT]"
git push
```

## Build
A Push always does the following steps

1. Version specified in launcher/package.json will be used as the release version (so be sure to update it!)
2. Application will be built for defined platforms ubuntu, windows and macos
3. Windows application will be signed with the organisations digicert signing certificate using keylocker
4. MacOS application will be signed and notarized using the organisations Apple Account
6. Artifacts will be uploaded/replaced to the draft Release with the name of the version mentioned in package.json

### Omit Build on Push
To omit the build step in push just add the tag [NOCI] in the commit message

This of course also works with a Draft release created via github-ui - as long as the name matches with the version. 

```
git commit -m "i dont want to trigger a new build [NOCI]"
git push
```

## Publishing a Release
When a release is stable we can mark it as pre-release or public-release, both via github-ui. In both cases the release will become public visible. When releasing its necessary to create a new (final) tag. This can easily be done in the github-ui. Also the releasenotes have to be written (and at least the technical part of it can be generated using the "Generate Release Notes" button in the gui). 

![image](https://github.com/stereum-dev/ethereum-node/assets/1465890/b7f3c8f4-11fc-4077-8f6b-23fd824a37a6)

As soon as the Release is published the upload after a build will break because the Release is closed. The build will also break if no new Draft Release is created. So the best is to make the following tasks right after releasing

1. Increment Version in package.json
2. Use git to create a new empty draft release

```
git commit -m "New empty draft Release [NOCI][DRAFT]"
git push
```
