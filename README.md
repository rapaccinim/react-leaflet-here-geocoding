# React Leaflet and HERE API
Playing with *[React Leaflet](https://react-leaflet.js.org/)* for displaying maps and *[HERE API](https://www.here.com/)* for geocoding.

## React Leaflet
*React Leaflet* is a good library for using *[Leaflet](https://leafletjs.com/)* maps in React.

From the [official documentation](https://react-leaflet.js.org/docs/start-introduction/):
> React Leaflet provides bindings between React and Leaflet. It does not replace Leaflet, but leverages it to abstract Leaflet layers as React components.

I personally think that *Leaflet* is a valid alternative to *Google Maps API* - although Google has the best mapping features *all-in-one* - so the React abstraction of *Leaflet* is a good set of components to consider.

### React Leaflet installation
Install `react`, `react-dom` and `leaflet` dependencies (if not already present):
```
yarn add react react-dom leaflet
```
Then install `react-leaflet`:
```
yarn add react-leaflet
```
If you are using TypeScript - like me in this repo - you have to add the TS definitions:
```
yarn add -D @types/leaflet
```

### React Leaflet usage
Once installed, you can use the `react-leaflet` components importing them. E.g.:
```
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
```

## HERE API
I was looking for a good API for *geocoding* as alternative to the vast *Google Maps API*:
* firstly I tried *[positionstack](https://positionstack.com/)* but it didn't convince me;
* then I tried *[HERE](https://www.here.com/)* and I felt in love.

*HERE*'s claim from the official website is quite self-describing:
> High precision data, advanced tooling and 35 years expertise for a safer, more efficient and cleaner world

### HERE API usage (geocode)
* Create an account on *HERE*'s [developer portal](https://developer.here.com/)
* Create an API key
* Use the API key for the endpoint call. I personally use *[Axios](https://yarnpkg.com/package/axios)* for the HTTPS call, so ensure to install it before with the following command: `yarn add axios`

### API key security concerns
You should never save your API keys in the code.

`create-react-app` [documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/) is quite clear about this:
> WARNING: Do not store any secrets (such as private API keys) in your React app! Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

Just for testing locally the app, you *could*:
- add the API Key in a `.env` file (after adding `.env` in the `.gitignore`), then removing after testing
- add a temporary environment variable in the shell

Anyway, **never** build and publish a React application that has API keys in the code, because the environment variables are embedded in the build.

## Troubleshooting
You could face an error with `npm` or `yarn` regarding `leaflet` modules.

In that case, follow the steps described in [this](https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat) StackOverflow thread:
* in `package.json` change the `browserslist` to:
```
"browserslist": [
   ">0.2%",
  "not dead",
  "not op_mini all"
]
```
* then delete the `node_modules/.cache/` directory (if necessary using the shell `rm -rf node_modules/.cache/`)
* retry to do `yarn` for installing (or `npm install`)
* finally restart `yarn start` (or `npm start`)

***

## Why I'm using yarn
I personally prefer `yarn` as package manager mainly for better security reasons.

But I'll give you a [good read](https://www.section.io/engineering-education/npm-vs-yarn-which-one-to-choose/) where you can find analysis to help you to be choose your favourite between `yarn` and `npm`.

P.S. as you can see from the following part of this `README.md`, the [good fellas behing React](https://reactjs.org/community/team.html) (aka a team of Facebook's devs) seem to prefer `yarn`. So...

***

## Create React App Stuff
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
