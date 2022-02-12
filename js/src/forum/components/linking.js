import app from "flarum/app";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import SignUpModal from "flarum/components/SignUpModal";

export default function firebaseAuth(name) {
  const firebaseConfig = {
    apiKey: "AIzaSyARHFIvxuMpRVvQuf2cvrI8vb5EJXD21TA",
    authDomain: "flarum-a69af.firebaseapp.com",
    databaseURL: "https://flarum-a69af-default-rtdb.firebaseio.com",
    projectId: "flarum-a69af",
    storageBucket: "flarum-a69af.appspot.com",
    messagingSenderId: "286405272646",
    appId: "1:286405272646:web:72ccb72cd97f58a73d5647",
    measurementId: "G-LR4PT01KTS"
  };
  // Initialize Firebase
  const App = initializeApp(firebaseConfig);
  const auth = getAuth();
  switch (name) {
    case "google":
      var provider = new GoogleAuthProvider(App);
      break;
    case "facebook":
      var provider = new FacebookAuthProvider(App);
      break;
    case "github":
      var provider = new GithubAuthProvider(App);
      break;
    case "twitter":
      var provider = new TwitterAuthProvider(App);
      break;
    default:
      app.alerts.show({ type: "" }, "This Login Method currently Disable");
      var provider = null;
      break;
  }
  if (provider) {
    signInWithPopup(auth, provider)
      .then((result) => {
        var body = result;
        app
          .request({
            url: app.forum.attribute("baseUrl") + "/firebase",
            method: "POST",
            body,
          })
          .then((payload) => {
            if (payload.loggedIn) {
              window.location.reload();
            } else {
              app.modal.show(SignUpModal, payload);
            }
          });
      })
      .catch((error) => {
        
        app.alerts.show({ type: "error" }, "This method is not allowed.");
        console.log(error);
      });
  
  }
}

function mergeAndUnmergeWithFacebook()  {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const user = auth.currentUser;
  //the user constant takes a bit of time to get the auth.current user value
  //which means if the user clicks sooner at the button the functions using that constant
  //might generate problems, that said we need to make sure it's filled before running any
  //treatment thus using it in an if statement.
  if(user) {
      //providerIndex checks if the current account is linked with a provider (twitter.com)
      //in this case. If the providerId exists then the checkIfLinked will return the index
      //of the providerId for the unlink function to work. It also helps to know which function
      //should be triggered (merge or unmerge).
      const providerIndex = checkIfLinked(user, 'facebook.com');
      if(providerIndex != -1)
          unmerge(user, providerIndex);
      else
          merge(user, twitterProvider);
  }
}
const merge = (previousUser, provider) => {
  // provider can be "google.com" or "twitter.com" etc..
  // We're basically signing in the user a second time with the social media account
  // that they want it to be merged with the current one.
  auth.signInWithPopup(provider)
  .then(user => {
      const secondAccountCred = user.credential;
      // Then we're deleting the current social media provider to prevent any conflicts in case it's used to connect to another account on your app.
      // The current user here means the one he just signed in with clicking on the merge button.
      auth.currentUser.delete()
      .then(() => {
          // Now we're connecting the previousUser which represents the provider account that the user used to 
          // sign in to the app at the very beginning.
          return previousUser.linkWithCredential(secondAccountCred);
      })
      .then(() => {
          // Reconnecting to the app.
          auth.signInWithCredential(secondAccountCred);
          console.log('Accounts linked successfully!');
      })
  })
}

const unmerge = (user, providerIndex) => {
  user.unlink(user.providerData[providerIndex].providerId)
  .then(() => {
      console.log('Unlinked successfully!');
  })
  .catch(error => {
      console.error(error);
  })
}

const checkIfLinked = (user, providerId) => {
  //provider Data is an array that contains the providers linked to their account
  // "google.com", "twitter.com", etc..
  const userProviders = user.providerData;
  let providerIndex = -1;
  for(let i = 0; i < userProviders.length; i++) {
      if(userProviders[i].providerId === providerId)
          providerIndex = i;
  }
  //-1 if the provider doesn't exist
  return providerIndex;
}
