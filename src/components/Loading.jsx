import { BallTriangle } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#e4e7ec',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <BallTriangle
        height="100"
        width="100"
        color="#0a64ff"
        ariaLabel="loading"
      />
    </div>
  )
}

export default Loading
