# SDS_Extraction_Tool_FrontEnd

## Overview
This is the front-end part of the Safety Data Sheet (SDS) Automation Project. It is build in Vue and TypeScript.


- Created by: Ethan Diosana
- Requested by: Gordon Huie
- Company: Isura


## How to Run for Development
1. Install the npm packages with `npm i`
2. Do `npm run dev`

## How to Build for Deployment
1. Install the npm packages with `npm i`
2. Do `npm run build`

## Setting up Firebase Deployment
As of June 6, 2025, this project uses Firebase for hosting. The following contains instructions on how to set up Firebase hosting if it has not already been set up.

### Setup
1. Install firebase with `npm install firebase-tools`
2. Do `firebase login` to log into Firebase
3. Do `firebase init` to initialize Firebase for the project

### Deploying
1. Build the project with `npm run build`
2. Point the Firebase `public` directory to `/dist`
3. Choose `single-page app`
4. Rewrite to `index.html` if you are using Vue Router
5. Decline setting up `automatic builds`
6. Verify that firebase.json has something like:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
7. Do `firebase deploy --only hosting` to host the app.