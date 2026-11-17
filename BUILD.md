# Building the apps

## Prerequisites
- Node.js 18+ and npm
- For Android: Android Studio + JDK 17, plus `ANDROID_HOME` set
- For desktop installer: Windows (for .exe) — electron-builder produces NSIS installer

## Install dependencies
```bash
npm install
```

## Desktop (.exe)
```bash
npm run build:win
```
Output: `dist/BlackMessage Setup *.exe`

## Android (.apk)
First time only:
```bash
npm run cap:init
npm run cap:add:android
```
Then:
```bash
npm run build:android
npm run cap:open:android
```
In Android Studio: Build → Build APK(s). Output under `android/app/build/outputs/apk/`.

## Run website as desktop app (dev)
```bash
npm start
```

## Notes
- The download buttons in the site point to the local APK/EXE files; inside the wrapped app they are not needed but harmless.
- Large binaries: consider Git LFS (already configured in `.gitattributes`).
