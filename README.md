# Stream App

#### This app provides a server to connect a streaming software. It's intended as a learning project and not for actual use.

#### It was created in React, Redux, Redux Thunk, Redux Form, React Router and React Portals.

## How to use

You must have installed Node/NPM and OBS to run.

-   Pull/download the repository. And open
-   Open three instances of your terminal.
-   Run `npm install` and then `npm start` in directories:
    -   /api
    -   /rtmpserver
    -   /client
-   After starting /client the app should open in your browser.
-   Create new channel.
-   Open the channel by pressing the new link and take note of ID Number.
-   Open OBS and create a new Scene. In sources add Display Capture and Audio Input Capture.
-   Go to OBS Settings -> Stream and use config:
    -   Service: Custom
    -   Server: `rtmp://localhost/live`
    -   Stream Key: Use the channel ID Number.
-   Confirm config and press Start Reconrding.
-   Press play in the video player to see your stream.
