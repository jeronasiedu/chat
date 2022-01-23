import { Container, Total, Images } from '../../styles/channeldetails.styled'
import { IconButton } from '@mui/material'
import { CgCloseR, AiOutlineClose } from 'react-icons/all'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const ChannelDetails = ({ setToggle }) => {
  const images = [
    { url: '/images/review7.jpg', desc: 'Maria Massey' },
    { url: '/images/review8.jpg', desc: 'Gabriel Sherman' },
    { url: '/images/review9.jpg', desc: 'Violet Coleman' },
    { url: '/images/review11.png', desc: 'Chad Reyes' },
    { url: '/images/review10.jpg', desc: 'Chad Reyes' },
  ]
  const [visibleImages, setVisibleImages] = useState(3)
  const { pathname } = useLocation()
  const type = pathname.split('/')[2]

  return (
    <Container>
      <div className="up">
        <p>{type === 'channel' ? 'Channel Details' : 'User Info'}</p>
        <IconButton
          aria-label="close"
          size="small"
          fi
          color="warning"
          onClick={() => setToggle(false)}
        >
          <CgCloseR color="#fff" />
        </IconButton>
      </div>
      <div className="media">
        <p>Media</p>
        <Total>148 pictures</Total>
      </div>
      <Images>
        {images.slice(0, visibleImages).map((item, i) => (
          <img key={i} src={item.url} alt={item.desc} />
        ))}
        {images.length > 3 && visibleImages < 4 ? (
          <button onClick={() => setVisibleImages(images.length)}>
            +{images.length - 3}
          </button>
        ) : (
          <button onClick={() => setVisibleImages(3)}>
            <AiOutlineClose />
          </button>
        )}
      </Images>
      <div className="files media">
        <p>Files & Links</p>
        <Total>42 files, 12 links</Total>
      </div>
    </Container>
  )
}

export default ChannelDetails
