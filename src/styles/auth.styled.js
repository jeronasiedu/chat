import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e4e7ec;
  display: grid;
  place-items: center;
  overflow: hidden;
`
export const Container = styled.div`
  width: clamp(21rem, 85%, 40rem);
  height: 30rem;
  background: #fff;
  overflow: hidden;
  border-radius: 0.1rem;
  position: relative;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
export const Glass = styled.div`
  @media only screen and (max-width: 480px) {
    top: 40%;
  }
  width: 80%;
  padding: 1rem 0.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 0.3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  h2 {
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.font.w_normal};
  }
  p {
    line-height: 1.2;
    background: -webkit-linear-gradient(90deg, #000, #2c3e50);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const Button = styled.button`
  z-index: 5;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.4rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 0.4rem;
  span {
    position: relative;
    color: #fff;
    letter-spacing: 2px;
    z-index: 1;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    .google-icon {
      width: 2rem;
      color: #fff;
    }
  }
  .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: #4973ff;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    ::after,
    ::before {
      content: '';
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -75%);
      background: #fff;
    }
    ::before {
      border-radius: 45%;
      background: rgba(20, 20, 20, 1);
      animation: animate 5s linear infinite;
    }
    ::after {
      border-radius: 40%;
      background: rgba(20, 20, 20, 0.5);
      animation: animate 10s linear infinite;
    }
  }
  :hover .liquid {
    top: -120px;
  }
  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`
