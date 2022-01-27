import { Container } from './styles/container.styled'
import SideBar from './components/SideBar'
import ChatArea from './components/ChatArea/ChatArea'
import Register from './components/Auth/Register'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/slice'
import { auth } from './firebase'
import Loader from './components/Loading'

const App = () => {
  const dispatch = useDispatch()
  const [user, loading, error] = useAuthState(auth)

  if (true) {
    // dispatch(
    //   updateUser({
    //     url: user.photoURL,
    //     username: user.displayName,
    //   })
    // )
    return (
      <Container>
        <SideBar />
        <ChatArea />
      </Container>
    )
  }

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <Register />
    </>
  )
}

export default App
