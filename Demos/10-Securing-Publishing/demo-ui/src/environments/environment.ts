export const environment = {
  production: false,
  authEnabled: false,
  title: 'ngSecurity',
  markdownPath: '/assets/markdown/',
  api: 'https://localhost:5001/',
  firebaseConfig: {
    apiKey: 'AIzaSyA8dcddU1_6r7mpFvwBtnJ-CEvH0UE5D28',
    authDomain: 'foodapp-63857.firebaseapp.com',
    projectId: 'foodapp-63857',
    storageBucket: 'foodapp-63857.appspot.com',
    messagingSenderId: '230135302900',
    appId: '1:230135302900:web:ae852b11ede38d110faca1',
    measurementId: 'G-DH8NGC6175',
  },
  o365Config: {
    tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
    clientId: '4e60c128-a813-4031-bd99-cf4327cce885',
    cacheLocation: 'localStorage',
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com',
      sharePointUri: 'https://integrationsonline.sharepoint.com',
    },
    returnUrl: 'https://localhost:4200',
  },
};
