# SDS Extraction Tool API

## Overview
This is the back-end of the Safety Data Sheet (SDS) Automation Tool built for Isura. It uses the OpenAI API to sort through the raw text of a .pdf file and return a .json with the correct information.

## How to Build
1. Install the packages with `npm i`
2. Build with `npx tsc` or `npx tsc --watch`

## Deploying for Hosting
As of June 6, 2025, this project uses Firebase for hosting. It is hosted as a Firebase Function. The following are instructions for setting it up if it has not already been set up.

### Setup
1. Initialize Firebase with `firebase init functions`
2. Select the same Firebase project (i.e. Isura SDS Automation Project)
3. Choose `TypeScript` when prompted
4. Say `No` to ESLint if you don't need it
5. Let it install dependencies
6. Set up `functions/src/index.ts` to use your existing Node Express app:
```js
import * as functions from "firebase-functions";
import app from "./yourExpressApp"; // wherever your Express app is

// Export the entire Express app as a single HTTPS function:
export const api = functions.https.onRequest(app);

```
7. Ensure that your Express app listens via `module.exports = app` and not `app.listen()`
8. In your firebase.json, add a rewrite so that calls to /api/** go to that function:
```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "/api/**",
        "function": "api"
      },
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
9. Deploy with `firebase deploy --only functions, hosting`