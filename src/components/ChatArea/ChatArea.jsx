import { Container } from '../../styles/chatarea.styled'
import Chat from './Chat'
import ChannelDetails from './ChannelDetails'
const ChatArea = () => {
  return (
    <Container>
      <Chat />
      <ChannelDetails />
    </Container>
  )
}

export default ChatArea
