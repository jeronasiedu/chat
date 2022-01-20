import { Container } from './styles/container.styled'
import SideBar from './components/SideBar'
import MinSide from './components/MinSide'
import ChatArea from './components/ChatArea/ChatArea'
const App = () => {
  return (
    <Container>
      <MinSide />
      <SideBar />
      <ChatArea />
    </Container>
  )
}

export default App
