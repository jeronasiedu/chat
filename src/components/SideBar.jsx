import {
  Container,
  Input,
  Search,
  ActiveUser,
  Avatar,
  Content,
  Active,
  Notifications,
  Total,
  Channel,
  Messages,
} from '../styles/sidebar.styled'
import {
  BiSearch,
  CgMoreAlt,
  FiMoreHorizontal,
  BiAlarm,
  FaRegUser,
  MdSettings,
  BiChevronDown,
} from 'react-icons/all'
const SideBar = () => {
  const isSingle = (val) => {
    return String(+val).charAt(0) == val
  }
  return (
    <Container>
      <SearchComponent />
      <ActiveUserComponent />
      <NotificationsComponent />
      <ChannelsComponent />
      <MessagesComponent isSingle={isSingle} />
    </Container>
  )
}

export default SideBar
// Search Component
const SearchComponent = () => {
  return (
    <Search>
      <Input type="text" placeholder="search for anything" />
      <BiSearch className="search-icon" />
    </Search>
  )
}
// Active User Component
const ActiveUserComponent = () => {
  return (
    <ActiveUser>
      <Content>
        <Avatar>
          <img src="/images/review1.jpg" alt="John Doe" />
        </Avatar>
        <Active>
          <h4 className="username">John Doe</h4>
          <div>
            <FiMoreHorizontal size={10} className="more" />
            <p>Active for chat</p>
          </div>
        </Active>
      </Content>
      <CgMoreAlt />
    </ActiveUser>
  )
}
// Notification Component
const NotificationsComponent = () => {
  const notifs = [
    { name: 'All Updates', icon: <BiAlarm size={20} />, total: 4 },
    { name: 'Members', icon: <FaRegUser size={20} />, total: 12 },
    { name: 'Settings', icon: <MdSettings size={20} />, total: 5 },
  ]
  return (
    <Notifications>
      {notifs.map((item, i) => (
        <div key={i} className="single-notification">
          <div className="notification-name">
            {item.icon}
            <p>{item.name}</p>
          </div>
          <Total>{item.total}</Total>
        </div>
      ))}
    </Notifications>
  )
}
// Channels Component
const ChannelsComponent = () => {
  const channels = [
    { name: 'General Chat', icon: '🥱', total: '' },
    { name: 'Design Supports', icon: '😎', total: 5 },
    { name: 'Product Showcases', icon: '💪🏼', total: 18 },
    { name: 'Hangout Lounge', icon: '🍕', total: 6 },
    { name: 'Bots & Games', icon: '🎷', total: '' },
  ]
  return (
    <Channel>
      <div className="channel-title">
        <BiChevronDown size={20} />
        <p>Channel</p>
      </div>
      {channels.map((item, i) => (
        <div key={i} className="single-channel">
          <div className="channel-name">
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </div>
          {item.total && <Total>{item.total}</Total>}
        </div>
      ))}
    </Channel>
  )
}
// Messages Components
const MessagesComponent = ({ isSingle }) => {
  const messages = [
    { name: 'Larry Armstrong', url: '/images/review1.jpg', total: '' },
    { name: 'Matilda Moss', url: '/images/review2.jpg', total: 1 },
    { name: 'Beulah Simon', url: '/images/review6.jpg', total: '' },
    { name: 'Fred Young', url: '/images/review3.jpg', total: 3 },
    { name: 'Cole Gordon', url: '/images/review5.jpg', total: 5 },
  ]
  return (
    <Messages>
      <div className="message-title">
        <BiChevronDown size={20} />
        <p>Messages</p>
      </div>
      {messages.map((item, i) => (
        <div key={i} className="single-message">
          <div className="message-name">
            <img src={item.url} alt={item.name} />
            <p>{item.name}</p>
          </div>
          {item.total && (
            <Total single={() => isSingle(item.total)}>{item.total}</Total>
          )}
        </div>
      ))}
    </Messages>
  )
}
