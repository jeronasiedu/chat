import {
  Container,
  SendContainer,
  Input,
  MessageArea,
  IconButton,
  Messages,
  SingleMessage,
} from '../../styles/chatbox.styled'
import { BiLayerPlus, AiFillAudio, FiSend } from 'react-icons/all'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const ChatBox = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const handleText = (e) => {
    e.preventDefault()
    if (!text) return
    setText('')
    setMessages([...messages, text])
  }
  return (
    <Container>
      <MessageArea>
        <Messages className="friend">
          {messages.map((item, i) => (
            <Message key={i} text={item} />
          ))}
        </Messages>
        <Messages className="you">
          {messages.map((item, i) => (
            <Message key={i} text={item} />
          ))}
        </Messages>
      </MessageArea>
      <SendMessage text={text} setText={setText} handleText={handleText} />
    </Container>
  )
}

export default ChatBox

// SEND MESSAGE COMPONENTS
const SendMessage = ({ text, setText, handleText }) => {
  return (
    <SendContainer onSubmit={handleText} layout>
      <AnimatePresence>
        {text.length < 1 && (
          <IconButton
            initial={{
              opacity: 0,
              x: 3,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 3,
            }}
            type="submit"
          >
            <AiFillAudio />
          </IconButton>
        )}
      </AnimatePresence>
      <Input
        type="text"
        spellcheck={false}
        placeholder="Message in Design Support"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <motion.div layout>
        <IconButton>
          <BiLayerPlus />
        </IconButton>
        <AnimatePresence>
          {text.length > 0 && (
            <IconButton
              initial={{
                opacity: 0,
                x: 3,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 3,
              }}
              type="submit"
            >
              <FiSend />
            </IconButton>
          )}
        </AnimatePresence>
      </motion.div>
    </SendContainer>
  )
}
// MESSAGE OUTPUT

const Message = ({ text }) => {
  return <SingleMessage>{text}</SingleMessage>
}
