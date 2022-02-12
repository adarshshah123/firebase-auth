import app from "flarum/app";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  AuthError,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  linkWithPopup,
  OAuthCredential,
} from "firebase/auth";
import SignUpModal from "flarum/components/SignUpModal";

function submitData(body) {
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
}
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
        var body = result.user.providerData;
        submitData(body);
      })
      .catch((error) => {
        console.log(error);
        if (error.message == "Firebase: Error (auth/operation-not-allowed).") {
          app.alerts.show({ type: "error" }, "This method is not allowed.");
        } else if (
          error.message ==
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          const email = error.customData.email;
          fetchSignInMethodsForEmail(auth, email).then(function (methods) {
            const providerNew = methods[0];
            var newProvider = new GoogleAuthProvider(App);
            signInWithPopup(auth, newProvider).then(function (result) {
              var user = result.user;
              const cred = FacebookAuthProvider.credential(
                credential.oauthAccessToken
              );
              linkWithCredential(user, cred)
                .then((result) => {
                  const body = result.user.providerData;
                  submitData(body);
                })
                .catch((error) => {
                  console.log("Account linking error", error);
                });
            });
          });
        } else {
        }
      });
  }
}

