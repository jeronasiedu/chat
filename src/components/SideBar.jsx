import {
  Container,
  Input,
  Search,
  ActiveUser,
  Content,
  Active,
  Notifications,
  Total,
  Channel,
  Messages,
  CustomAvatar,
} from '../styles/sidebar.styled'
import {
  CgMoreAlt,
  FiMoreHorizontal,
  BiAlarm,
  FaRegUser,
  MdSettings,
  BiChevronDown,
} from 'react-icons/all'
import { useState } from 'react'
import { BiPlus } from 'react-icons/all'
import { NavLink } from 'react-router-dom'
import { channels, contacts } from '../data'
import { Avatar, IconButton } from '@mui/material'
import randomColor from 'randomcolor'
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
    </Search>
  )
}
// Active User Component
const ActiveUserComponent = () => {
  return (
    <ActiveUser>
      <Content>
        <CustomAvatar>
          <img src="/images/review1.jpg" alt="John Doe" />
        </CustomAvatar>
        <Active>
          <h4 className="username">John Doe</h4>
          <div>
            <FiMoreHorizontal size={10} className="more" />
            <p>Active for chat</p>
          </div>
        </Active>
      </Content>
      <IconButton
        aria-label="more"
        size="small"
        style={{
          color: '#fff',
        }}
      >
        <CgMoreAlt />
      </IconButton>
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
  const [openChannels, setOpenChannels] = useState(true)
  return (
    <Channel>
      <div
        className="channel-title"
        onClick={() => setOpenChannels(!openChannels)}
      >
        <BiChevronDown size={20} className={openChannels ? 'rotate' : ''} />
        <p>Channels</p>
      </div>
      {openChannels &&
        channels.map((item, i) => (
          <NavLink
            key={i}
            to={`chat/channel/${item.id}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="single-channel">
              <div className="channel-name">
                {item.url ? (
                  <Avatar
                    src={item.url}
                    sx={{
                      width: 30,
                      height: 30,
                    }}
                    variant="rounded"
                  />
                ) : (
                  <Avatar
                    size="small"
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: randomColor(),
                    }}
                    variant="rounded"
                  >
                    {item.name.slice(0, 1)}
                  </Avatar>
                )}
                <div>
                  <p>{item.name}</p>
                  <p className="last-message">{item.lastMsg.text}</p>
                </div>
              </div>
              <div className="right-side-message">
                <p className="last-message-date last-message">
                  {item.lastMsg.date}
                </p>
                {item.total && (
                  <Total single={() => isSingle(item.total)}>
                    {item.total}
                  </Total>
                )}
              </div>
            </div>
          </NavLink>
        ))}
    </Channel>
  )
}
// Messages Components
const MessagesComponent = ({ isSingle }) => {
  const [openMessages, setOpenMessages] = useState(true)
  return (
    <Messages>
      <div
        className="message-title"
        onClick={() => setOpenMessages(!openMessages)}
      >
        <BiChevronDown size={20} className={openMessages ? 'rotate' : ''} />
        <p>Messages</p>
      </div>
      {openMessages &&
        contacts.map((item, i) => (
          <NavLink
            to={`chat/person/${item.id}`}
            key={i}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="single-message">
              <div className="message-name">
                <img src={item.url} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p className="last-message">{item.lastMsg.text}</p>
                </div>
              </div>

              <div className="right-side-message">
                <p className="last-message-date last-message">
                  {item.lastMsg.date}
                </p>
                {item.total && (
                  <Total single={() => isSingle(item.total)}>
                    {item.total}
                  </Total>
                )}
              </div>
            </div>
          </NavLink>
        ))}
      <div className="more-friends">
        <button aria-label="add friends" size="small">
          <BiPlus />
        </button>
        <span>Add Friends</span>
      </div>
    </Messages>
  )
}
