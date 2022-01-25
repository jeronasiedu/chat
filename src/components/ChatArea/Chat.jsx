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
  Subs,
} from '../../styles/chat.styled.js'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { channels, contacts } from '../../data'
import {
  BiLayerPlus,
  AiFillAudio,
  FiSend,
  BsLayoutSplit,
} from 'react-icons/all'
import ChatBox from './ChatBox.jsx'
import millify from 'millify'
import { IconButton } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chat/:type/:id"
          element={
            <>
              <NavBar setToggle={setToggle} toggle={toggle} />
              <ChatBox messages={messages} />
              <SendMessage
                text={text}
                handleText={handleText}
                setText={setText}
              />
            </>
          }
        />
      </Routes>
    </Container>
  )
}

export default Chat

// NAVBAR
const NavBar = ({ setToggle, toggle }) => {
  const { id, type } = useParams()
  let data
  if (type === 'channel') {
    let channel = channels.filter((item) => item.id === Number(id))
    channel = channel[0]
    data = channel
  } else {
    let contact = contacts.filter((item) => item.id === Number(id))
    contact = contact[0]
    data = contact
  }
  return (
    <Navbar>
      <Channel onClick={() => setToggle(!toggle)}>
        <Icon>{data?.ic}</Icon>
        <Name>{data?.name}</Name>
        <Desc>{data?.desc}</Desc>
        {type === 'channel' ? (
          <Subs>
            <span
              style={{
                marginRight: '0.3rem',
              }}
            >
              {millify(data?.totalSubscribers, {
                precision: 3,
                lowercase: true,
              })}
            </span>
            Subscribers
          </Subs>
        ) : (
          <Subs>
            {data?.lastSeen !== 'online' && 'last seen @'}
            <span
              style={{
                marginLeft: '0.5rem',
              }}
            >
              {data?.lastSeen}
            </span>
          </Subs>
        )}
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
  const { id, type } = useParams()
  let data
  if (type === 'channel') {
    let channel = channels.filter((item) => item.id === Number(id))
    channel = channel[0]
    data = channel
  } else {
    let contact = contacts.filter((item) => item.id === Number(id))
    contact = contact[0]
    data = contact
  }
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
        placeholder={`Message ${type === 'channel' ? 'in' : 'with'} ${
          data?.name
        }`}
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
const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p
        style={{
          fontSize: '0.8rem',
          background: '#1E2C3A',
          padding: '0.1rem 0.4rem',
          borderRadius: '0.5rem',
        }}
      >
        Select a chat to start messaging
      </p>
    </div>
  )
}
