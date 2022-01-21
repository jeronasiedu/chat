import {
  Container,
  Navbar,
  Channel,
  Icon,
  Name,
  Desc,
  SendContainer,
  Input,
  CustomButton,
} from '../../styles/chat.styled.js'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  BiLayerPlus,
  AiFillAudio,
  FiSend,
  BsLayoutSplit,
} from 'react-icons/all'
import ChatBox from './ChatBox.jsx'
import { IconButton } from '@mui/material'
const Chat = ({ setToggle, toggle }) => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const handleText = (e) => {
    e.preventDefault()
    if (!text || text.trim().length === 0) {
      setText('')
      return
    }

    setText('')
    setMessages([...messages, { text, date: new Date() }])
  }
  return (
    <Container>
      <NavBar setToggle={setToggle} toggle={toggle} />
      <ChatBox messages={messages} />
      <SendMessage text={text} handleText={handleText} setText={setText} />
    </Container>
  )
}

export default Chat

// NAVBAR
const NavBar = ({ setToggle, toggle }) => {
  return (
    <Navbar>
      <Channel onClick={() => setToggle(!toggle)}>
        <Icon>😎</Icon>
        <Name>Design Support</Name>
        <Desc>Where we share our works and get feedbacks</Desc>
      </Channel>
      <IconButton
        aria-label="open"
        onClick={() => setToggle(!toggle)}
        size="small"
        color="info"
        sx={{
          mr: 3,
        }}
      >
        <BsLayoutSplit color="#fff" />
      </IconButton>
    </Navbar>
  )
}
// SEND MESSAGE
const SendMessage = ({ text, setText, handleText }) => {
  return (
    <SendContainer onSubmit={handleText} layout>
      <AnimatePresence>
        {text.length < 1 && (
          <CustomButton
            className="audio"
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
          </CustomButton>
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
        <CustomButton>
          <BiLayerPlus />
        </CustomButton>
        <AnimatePresence>
          {text.length > 0 && (
            <CustomButton
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
              <FiSend color="#fff" />
            </CustomButton>
          )}
        </AnimatePresence>
      </motion.div>
    </SendContainer>
  )
}
