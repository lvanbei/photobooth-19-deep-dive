# Photobooth-19-deep-dive 📸
Photobooth Phygital app in React

## Table of content 

1. [ Install the app. ](#install)
2. [ Firebase config. ](#firebase)
3. [ Setup dev. tools ](#dev)

<a name="install"></a>
## Install the app

1. Clone the repo.
2. Install React through Node.js. Follow the guidelines [here](https://react.dev/learn/start-a-new-react-project).
3. Open your terminal and go to the root of the repo.
4. Type the commmand : `npm install`.
5. Type the command : `npm start`.
6. Congrats the Photoboot should be up and running ! 🥳

<a name="firebase"></a>
## Firebase configuration

If you want to link the Photobooth to Firebase (storage) you will need to : 

1. [Create a Firebase project](https://firebase.google.com/).
2. Find your firebaseConfig object and copy/past it into the file : src/firebase.js, line 11.
   
   You can follow this guidelines to find your own firebaseConfig ["Get config object for your web app"](https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article).

   Or follow the steps on the below screenshots.

![Screenshot 2023-06-16 at 10 07 29](https://github.com/lvanbei/photohooth-19-deep-dive/assets/38706595/5cc963bd-c21e-47a9-b95c-0c203061d892)

![Screenshot 2023-06-16 at 10 07 45](https://github.com/lvanbei/photohooth-19-deep-dive/assets/38706595/25719a14-c6c0-4885-b0ee-a3a6954b47ab)

   
3. 🚨 IMPORTANT 🚨 Setup Firebase Storage.
   
   ![Screenshot 2023-06-16 at 15 17 19](https://github.com/lvanbei/photobooth-19-deep-dive/assets/38706595/031b356d-9976-478b-b10a-dc14c91bae11)

   ![Screenshot 2023-06-16 at 15 17 28](https://github.com/lvanbei/photobooth-19-deep-dive/assets/38706595/046a8f71-245e-4bdb-9ee9-5638419a6c47)

   ![Screenshot 2023-06-16 at 15 17 39](https://github.com/lvanbei/photobooth-19-deep-dive/assets/38706595/d9344487-154a-4d96-bdc9-ab611f7ac6b6)

   
4. 🚨 IMPORTANT 🚨 Once you have a Firebase project make sure to activate the Anonyme Authentification.

   ![Screenshot 2023-06-15 at 20 05 35](https://github.com/lvanbei/photohooth-19-deep-dive/assets/38706595/5a5f0984-ca62-422d-a755-22e70a535d7d)

5. Restart the React App.

<a name="dev"></a>
## Setup dev. tools

1. Don't forget to put your Browser (Chrome) into developer mode and edit the window dimensions with the follow offset : 1080 by 1920.

![246196679-b4082f2a-6216-44d4-a2f9-277e08a752a6](https://github.com/lvanbei/photobooth-19-deep-dive/assets/38706595/2b2b43b7-0ee0-40ec-bce8-6983f4c0404f)


