import { Container } from './styles/container.styled'
import SideBar from './components/SideBar'
import ChatArea from './components/ChatArea/ChatArea'
const App = () => {
  return (
    <Container>
      <SideBar />
      <ChatArea />
    </Container>
  )
}

export default App
