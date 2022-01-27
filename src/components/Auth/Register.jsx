import {
  Container,
  Wrapper,
  Image,
  ImageContainer,
  Glass,
  Button,
} from '../../styles/auth.styled.js'

import db, { auth, provider } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { signInWithPopup } from 'firebase/auth'
import { BsGoogle } from 'react-icons/all'
const Register = () => {
  const saveUserToDB = async (user) => {
    const userRef = await addDoc(collection(db, 'users'), {
      photoURL: user.photoURL,
      displayName: user.displayName,
    })
    console.log(userRef.id)
  }
  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        saveUserToDB(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image src="/images/chat.jpg" alt="login logo"></Image>
        </ImageContainer>
        <Glass>
          <h2>Envision a place</h2>
          <p>
            where you can have a spot with a school club, a{' '}
            <span className="pink">gaming bunch</span> , or a general
            workmanship neighborhood. Where just you and modest bunch of
            companions can get to know each other A spot that simplifies it to
            work reliably and hang out more habitually
          </p>
        </Glass>
        <Button onClick={handleSignInWithGoogle}>
          <span>
            Continue with <BsGoogle className="google-icon" />
          </span>
          <div className="liquid"></div>
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Register
