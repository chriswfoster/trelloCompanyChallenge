import * as firebase from "firebase"

const config = {
  apiKey: process.env.REACT_APP_webapikey,
  authDomain: process.env.REACT_APP_authdomain,
  projectId: process.env.REACT_APP_projectid
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
export const provider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
