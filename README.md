[![Netlify Status](https://api.netlify.com/api/v1/badges/8332805d-cead-4640-88ac-0898fb7fb3d8/deploy-status)](https://app.netlify.com/sites/leg-up-legal/deploys)

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

## Overview
This is the "Quickstart React" example Monday app. 
<br>It can be used as a board view or dashboard widget, connected to a board and render data from the board using settings.

# Getting Started with Create React App

<br>This app demonstrates how to use: 
- [settings](https://github.com/mondaycom/monday-sdk-js#mondaygettype-params--) 
- [context](https://github.com/mondaycom/monday-sdk-js#mondaygettype-params--) 
- [API](https://github.com/mondaycom/monday-sdk-js#mondayapiquery-options--)

<br>You can find more info in our QuickStart guide [here](https://monday.com/developers/apps/quickstart-view/)
<br /> ![Screenshot](https://dapulse-res.cloudinary.com/image/upload/w_900/v1591485466/remote_mondaycom_static/developers/screenshots/final_view.gif)

## Run the project

In the project directory, you should run:

### `npm install`

And then to run an application with automatic virtual ngrok tunnel, run:

### `npm start`

Visit http://localhost:4040/status and under "command_line section" find the URL. This is the public URL of your app, so you can use it to test it.
F.e.: https://021eb6330099.ngrok.io

## Configure Monday App 

1. Open monday.com, login to your account and go to a "Developers" section.
2. Create a new "QuickStart View Example App"
3. Open "OAuth & Permissions" section and add "boards:read" scope
4. Open "Features" section and create a new "Boards View" feature
5. Open "View setup" tab and fulfill in "Custom URL" field your ngrok public URL, which you got previously (f.e. https://021eb6330099.ngrok.io)
6. Click "Boards" button and choose one of the boards with some data in it.
7. Click "Preview button"
8. Enjoy the Quickstart View Example app!

## Release your app
1. Run script
### `npm run build`
2. Zip your "./build" folder
3. Open "Build" tab in your Feature
4. Click "New Build" button
5. Click "Upload" radio button and upload zip file with your build
6. Go to any board and add your just released view
7. Enjoy!
