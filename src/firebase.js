import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
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
export default db
