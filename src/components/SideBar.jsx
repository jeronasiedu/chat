import {
  Container,
  Input,
  Search,
  ActiveUser,
  Content,
  Active,
  Total,
  Channel,
  Messages,
  CustomAvatar,
} from '../styles/sidebar.styled'
import {
  CgMoreAlt,
  FiMoreHorizontal,
  BiChevronDown,
  CgLogOut,
  AiOutlineSetting,
  TiGroupOutline,
} from 'react-icons/all'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { channels, contacts } from '../data'
import { Avatar, IconButton, MenuItem, Menu } from '@mui/material'
import randomColor from 'randomcolor'
import { logout } from '../firebase'
import { useSelector } from 'react-redux'
const SideBar = () => {
  return (
    <Container>
      <SearchComponent />
      <div
        style={{
          paddingInline: '0.3rem',
        }}
      >
        <ActiveUserComponent />
        <ChannelsComponent />
        <MessagesComponent />
      </div>
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
  const { user } = useSelector((state) => state.chatReducer)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    handleClose()
    logout()
  }
  return (
    <ActiveUser>
      <Content>
        <CustomAvatar>
          <img src={user?.url} alt={user?.username} />
        </CustomAvatar>
        <Active>
          <h4 className="username">{user?.username}</h4>
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
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CgMoreAlt />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            background: '#181a1b',
            color: '#fff',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: '#181a1b',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <TiGroupOutline
            size={20}
            style={{
              marginRight: '0.2rem',
            }}
          />
          New Friend
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AiOutlineSetting
            size={20}
            style={{
              marginRight: '0.2rem',
            }}
          />
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <CgLogOut
            size={20}
            style={{
              marginRight: '0.2rem',
            }}
          />
          Log Out
        </MenuItem>
      </Menu>
    </ActiveUser>
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
                {item.total && <Total>{item.total}</Total>}
              </div>
            </div>
          </NavLink>
        ))}
    </Channel>
  )
}
// Messages Components
const MessagesComponent = () => {
  const [openMessages, setOpenMessages] = useState(true)
  return (
    <Messages>
      <div
        className="message-title"
        onClick={() => setOpenMessages(!openMessages)}
      >
        <BiChevronDown size={20} className={openMessages ? 'rotate' : ''} />
        <p>Chats</p>
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
                {item.total && <Total>{item.total}</Total>}
              </div>
            </div>
          </NavLink>
        ))}
    </Messages>
  )
}
