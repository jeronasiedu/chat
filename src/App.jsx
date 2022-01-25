import { Container } from './styles/container.styled'
import SideBar from './components/SideBar'
import ChatArea from './components/ChatArea/ChatArea'
import { useState } from 'react'
import Index from './components/Auth/Index'
const App = () => {
  const [user, setUser] = useState(false)
  return (
    <>
      {user ? (
        <Container>
          <SideBar />
          <ChatArea />
        </Container>
      ) : (
        <Index />
      )}
    </>
  )
}

export default App
