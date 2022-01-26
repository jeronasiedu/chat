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
import { BiFingerprint, MdAlternateEmail, FaRegUser } from 'react-icons/all'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateUser } from '../../redux/slice.js'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userDetails)
    dispatch(updateUser(userDetails))
    navigate('/', { replace: true })
    setUserDetails({
      username: '',
      email: '',
      password: '',
    })
  }
  return (
    <Wrapper>
      <Container>
        <Left>
          <Content>
            <h2>Join Us</h2>
            <p>Join us! Your friends are waiting</p>
            <Form onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Anything goes"
                  name="username"
                  required
                  id="username"
                  value={userDetails.username}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }}
                  autoCorrect="false"
                  autoComplete="off"
                  autoFocus
                />
                <span>
                  <FaRegUser />
                </span>
              </div>
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  id="email"
                  value={userDetails.email}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }}
                  autoCorrect="false"
                  autoComplete="off"
                  name="email"
                />
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
                  id="password"
                  value={userDetails.password}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }}
                  name="password"
                />
                <span>
                  <BiFingerprint />
                </span>
              </div>
              <div className="bottom">
                <Link to="forgotpassword" className="link">
                  Forgot Password
                </Link>
                <Button type="submit">Join Now</Button>
                <Button onClick={() => signInWithGoogle()}>
                  <img src="/images/google.svg" alt="google logo" />
                  Sign up with google
                </Button>
              </div>
            </Form>
            <p className="sign-up">
              <span>Already have an account?</span>
              <Link to="/login" className="link ">
                Log in
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

export default Register
