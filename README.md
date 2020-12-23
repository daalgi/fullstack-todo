# FULLSTACK TODO
Source tutorial:
https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/
https://github.com/Sharvin26/TodoApp/blob/master/functions/index.js

Authentication:
https://levelup.gitconnected.com/authentication-using-firebase-and-react-js-99392c6fa58b
https://github.com/suhas86/firebase-react-auth/tree/firebase-integration

Firebase tutorial:
https://codelabs.developers.google.com/codelabs/firebase-get-to-know-web?hl=en&continue=https%3A%2F%2Fcodelabs.developers.google.com%2F%3Fcat%3Dfirebase#0

**API manual checks**

postman.com

**Deploy firebase functions**

```firebase deploy```
or
```firebase deploy --only functions```

**Test functions locally**

```firebase sere```
or
```firebase emulators:start --only functions```

**POR AQUÍ:**
TODO --> 4. Get User Details:

## EMULATORS
https://firebase.google.com/docs/functions/local-emulator

To set up admin credentials for emulated functions:

1. Open the Service Accounts pane of the Google Cloud Console.
2. Make sure that App Engine default service account is selected, and use the options menu at right to select Create key.
3. When prompted, select JSON for the key type, and click Create.
4. Set your Google default credentials to point to the downloaded key:

```
set GOOGLE_APPLICATION_CREDENTIALS=path\to\key.json
firebase emulators:start
```

After completing these steps, your functions tests can access Firebase and Google APIs using the Admin SDK. For example, when testing an Authentication trigger, the emulated function could call ```admin.auth().getUserByEmail(email)```.