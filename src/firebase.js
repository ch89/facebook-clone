import firebase from "firebase"

let app = firebase.initializeApp({
	apiKey: "AIzaSyDDrRL-W1hZqykRGs7EHCESXwqC4QRt70I",
	authDomain: "facebook-clone-bd317.firebaseapp.com",
	databaseURL: "https://facebook-clone-bd317.firebaseio.com",
	projectId: "facebook-clone-bd317",
	storageBucket: "facebook-clone-bd317.appspot.com",
	messagingSenderId: "98304860818",
	appId: "1:98304860818:web:6945cd17be4e65262b3c4b",
	measurementId: "G-EJNMM8LV9M"
})

let db = app.firestore(),
	auth = firebase.auth(),
	provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db