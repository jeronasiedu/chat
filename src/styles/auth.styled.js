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
  width: clamp(21rem, 85%, 55rem);
  height: 30rem;
  background: #fff;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  padding-inline: 0.3rem;
`
export const Left = styled.div`
  grid-column: 1 / 2;
  display: grid;
  place-items: center;
  @media only screen and (max-width: 720px) {
    grid-column: 1 / 3;
  }
`
export const Right = styled.div`
  grid-column: 2 / 3;
  position: relative;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`
export const Content = styled.div`
  padding: 1rem;
  h2,
  p:first-of-type {
    text-align: center;
  }
  h2 {
    font-weight: ${({ theme }) => theme.font.w_normal};
  }
  h2 + p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  label,
  input {
    display: block;
  }
  label {
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
  }
  input {
    font-size: 1.1rem;
    padding: 0.1rem 0.5rem;
    padding-right: 1.5rem;
    font-family: inherit;
    font-weight: ${({ theme }) => theme.font.w_light};
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px,
      rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(60 66 87 / 8%) 0px 2px 5px 0px;
    width: 100%;
    border-radius: 0.3rem;
    ::placeholder {
      font-size: 0.9rem;
    }
  }
  div {
    position: relative;
    :not(:last-child) {
      margin-block: 0.7rem;
    }
    span {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  .link {
    color: #000;
    font-size: 0.85rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.35rem;
  margin: 0.2rem;
  background: #000;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &.light {
    background: #fff;
    color: #000;
    border: 1px solid gray;
  }
`
export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #fff;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
export const Glass = styled.div`
  width: 80%;
  padding: 1rem 0.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
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
    .pink {
      padding: 0.01rem 0.1rem;
      background: #ee257d;
      border-radius: 0.2rem;
      color: ${({ theme }) => theme.colors.light};
    }
  }
`