import {
  Container,
  SingleMessage,
  Time,
  Tick,
} from '../../styles/chatbox.styled'
import { useRef, useEffect } from 'react'
import { format } from 'date-fns'
import { IoCheckmarkDone, IoCheckmarkOutline } from 'react-icons/all'
const ChatBox = ({ messages }) => {
  const containerRef = useRef('')
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [messages])

  return (
    <Container ref={containerRef}>
      {/* {messages.map((item, i) => (
        <SingleMessage className="friend" key={i}>
          {item}
        </SingleMessage>
      ))} */}
      {messages.map((item, i) => (
        <SingleMessage key={i}>
          <p className="text">{item.text}</p>
          <div>
            <Time>{format(item.date, 'p')}</Time>
            <Tick>
              <IoCheckmarkOutline />
            </Tick>
          </div>
        </SingleMessage>
      ))}
    </Container>
  )
}

export default ChatBox
