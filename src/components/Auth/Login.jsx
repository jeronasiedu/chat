import {
  Container,
  Left,
  Right,
  Wrapper,
  Content,
  Form,
  Button,
  Image,
  ImageContainer,
  Glass,
} from '../../styles/auth.styled.js'
import { Link } from 'react-router-dom'
import { BiFingerprint, MdAlternateEmail } from 'react-icons/all'
import { auth } from '../../firebase'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  return (
    <Wrapper>
      <Container>
        <Left>
          <Content>
            <h2>Welcome back</h2>
            <p>Welcome back! Please enter your details</p>
            <Form onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" required />
                <span>
                  <MdAlternateEmail />
                </span>
              </div>
              <div className="">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <span>
                  <BiFingerprint />
                </span>
              </div>
              <div className="bottom">
                <Link to="forgotpassword" className="link">
                  Forgot Password
                </Link>
                <Button type="submit">Login</Button>
                <Button onClick={() => signInWithGoogle()}>
                  <img src="/images/google.svg" alt="google logo" />
                  Continue with google
                </Button>
              </div>
            </Form>
            <p className="sign-up">
              <span>Don't have an account?</span>
              <Link to="/" className="link ">
                sign up for free
              </Link>
            </p>
          </Content>
        </Left>
        <Right>
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
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Login
