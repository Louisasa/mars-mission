# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run format`

Run this command to format your files

### `API key`

Parts of the project, for example the PhotoViewer component, require an API key to query the NASA API. The API key can be stored as an environment variable.

Start by created a file named '.env.local' in the root directory of the project.

In the '.env.local' file, define your environment variable in the format:

```
REACT_APP_API_KEY=your_api_key_here
```

Note that you do not need quotation marks around the API key value.

You can access the API key anywhere in the project using 'process.env.REACT_APP_API_KEY'.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
