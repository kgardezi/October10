# Bang Board

A simple local whiteboard built with React, Vite, and tldraw. Draw, add text and shapes, and move things around. No account or server setup needed.

## Run on this Windows machine

Double-click **Start Bang Board.cmd**. Keep its window open while using the board. Press Ctrl+C to stop.

Always use **http://127.0.0.1:5173** in the same browser profile to return to your saved board.

## Install on another machine

Install Node.js 22.12+ (or 24+), open a terminal in this folder, then run:

```sh
npm install
npm start
```

The supplied pnpm-lock.yaml records the verified dependency tree. With pnpm installed, use `pnpm install --frozen-lockfile` for an exact reinstall.

## Build

For public hosting, copy `.env.example` to `.env.local`, set `VITE_TLDRAW_LICENSE_KEY` to your valid tldraw license key, and then build. The key must permit the final website domain. This SDK key is designed to be included in the browser bundle. Never put other credentials in VITE variables.

```sh
npm run build
npm run preview
```

The build is in `dist`. Stop the running development server before using preview; both use the same address so your board stays accessible.

## Saving

The board and imported images save automatically in this browser's IndexedDB. Clearing site data, changing browser profiles, or using private browsing can remove or isolate drawings. This is local saving, not a backup. Use tldraw's menu to export important work.

Fonts and icons are bundled locally. Once installed, the app can run without an internet connection. Only the local machine can access the server.

This is a minimal wrapper around the standard tldraw editor; no multiplayer, accounts, cloud storage, or AI features are added. tldraw itself includes its usual drawing tools and is the main dependency.

tldraw displays a "Get a license for production" notice in local development. A production deployment requires an appropriate tldraw SDK license; review https://tldraw.dev/community/license before publishing. The launcher runs the local development version.

## Verification

Dependencies installed; production build passed. The local canvas loaded, a rectangle was drawn, and the rectangle survived a page refresh. The test shape was then removed.
