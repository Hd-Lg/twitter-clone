import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'twitter-clone-48bea.firebaseapp.com',
	projectId: 'twitter-clone-48bea',
	storageBucket: 'twitter-clone-48bea.appspot.com',
	messagingSenderId: '1033180887679',
	appId: '1:1033180887679:web:2331117d3a2ddcafb15d4a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
