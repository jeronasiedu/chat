import {
  Container,
  Navbar,
  Channel,
  Icon,
  Name,
  Desc,
  Contacts,
  Profile,
  TotalContacts,
} from '../../styles/chat.styled.js'
import ChatBox from './ChatBox.jsx'
const Chat = () => {
  return (
    <Container>
      <NavBar />
      <ChatBox />
    </Container>
  )
}

export default Chat

// NAVBAR
const NavBar = () => {
  const contacts = [
    {
      url: '/images/review8.jpg',
      name: 'Michael Lowe',
    },
    {
      url: '/images/review9.jpg',
      name: 'Raymond Collier',
    },
    {
      url: '/images/review10.jpg',
      name: 'Cynthia Powers',
    },
  ]
  return (
    <Navbar>
      <Channel>
        <Icon>😎</Icon>
        <Name>Design Support</Name>
        <Desc>Where we share our works and get feedbacks</Desc>
      </Channel>
      <Contacts>
        {contacts.slice(0, 3).map((item, i) => (
          <Profile key={i} src={item.url} alt={item.name} />
        ))}
        {contacts.length > 3 && (
          <TotalContacts>{contacts.length - 3}</TotalContacts>
        )}
      </Contacts>
    </Navbar>
  )
}
