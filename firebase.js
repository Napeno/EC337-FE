import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from './firebase-config';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const firestore = getFirestore(app);

export { app, auth, firestore, getApp, getAuth };
