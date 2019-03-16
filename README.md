> react-pwa 

Demonstrates a Progressive Web App capable of running offline, creating desktop launchers, and persisting state locally.

Bootstrapped using create-react-app, so all typical CRA scripts apply
## Available Scripts
### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`

PWA features only accessible via production builds, so run `build` and then serve using an http-server
### `serve -s build`

Service workers are delicate for security reasons, so to test on a non-local device you either need:
* A proxy making your host appear to be localhost
* A valid https server with trusted certs
* ngrok over https

This pattern has proven quite useful during development of this POC:
### `npm run build`
### `serve -s build`
### `ngrok  http 5000`
--------------------------
### `npm start` 
works fine for local testig of app itself. 
You only need to run service workers when testing offline capabilities