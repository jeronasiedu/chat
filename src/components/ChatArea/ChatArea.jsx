import { Container } from '../../styles/chatarea.styled'
import Chat from './Chat'
import ChannelDetails from './ChannelDetails'
import { useState } from 'react'
const ChatArea = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <Container>
      <Chat setToggle={setToggle} toggle={toggle} />
      {toggle && <ChannelDetails setToggle={setToggle} />}
    </Container>
  )
}

export default ChatArea
