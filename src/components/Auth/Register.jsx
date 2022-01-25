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
import {
  AiOutlineGoogle,
  BiFingerprint,
  MdAlternateEmail,
} from 'react-icons/all'
const Register = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Content>
            <h2>Welcome back</h2>
            <p>Welcome back! Please enter your details</p>
            <Form>
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
              <Link to="forgotpassword" className="link">
                forgotpassword
              </Link>
              <Button type="submit" className="primary">
                Sign in
              </Button>
              <Button type="submit" className="light">
                <AiOutlineGoogle /> Sign in google
              </Button>
            </Form>
            <p>
              Don't have an account?
              <Link to="register" className="link">
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

export default Register
