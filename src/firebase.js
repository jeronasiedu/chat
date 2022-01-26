import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAV9SjXAd7lB-kTNjD3TZoirJ1MRO7UzY8',
  authDomain: 'chat-24b35.firebaseapp.com',
  projectId: 'chat-24b35',
  storageBucket: 'chat-24b35.appspot.com',
  messagingSenderId: '326965605094',
  appId: '1:326965605094:web:7a1083713c0393a70dc127',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const auth = getAuth()
export const useUserState = () => {
  return useAuthState(auth)
}
export const logout = () => {
  signOut(auth)
}
export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
}
export default db
