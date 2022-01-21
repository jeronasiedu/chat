import styled from 'styled-components'
export const Container = styled.div`
  flex: 0.25;
  padding: 0.5rem;
  background: linear-gradient(
    to bottom,
    #181b1f,
    #181b20,
    #181a1b,
    transparent
  );
  overflow-y: auto;
  overflow-x: hidden;
`
export const Search = styled.div`
  position: relative;
  width: 100%;
`
export const Input = styled.input`
  background: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.4rem;
  padding: 0.3rem;
  font-family: inherit;
  padding-right: 1.5rem;
  font-size: 1rem;
  outline: none;
  border: none;
  width: 100%;

  ::placeholder {
    font-size: 0.8rem;
    font-family: inherit;
  }
`
export const ActiveUser = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.background.active};
  padding: 0.5rem;
  border-radius: 0.8rem;
`
export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const Avatar = styled.div`
  width: 2.8rem;
  aspect-ratio: 1;
  border-radius: 0.7rem;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
export const Active = styled.div`
  .username {
    font-weight: ${({ theme }) => theme.font.w_normal};
  }
  div {
    display: flex;
    gap: 0.1rem;
    align-items: center;
    .more {
      background: #53cc92;
      border-radius: 50%;
      color: #000;
      padding: 0.1rem;
    }
    p {
      font-size: 0.6rem;
      color: ${({ theme }) => theme.colors.gray};
      font-weight: ${({ theme }) => theme.font.w_bold};
    }
  }
`
export const Notifications = styled.div`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .single-notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notification-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      font-size: 0.9rem;
    }
  }
`

export const Total = styled.p`
  background: ${({ theme }) => theme.colors.notification};
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  border-radius: ${({ single }) => (single ? '50%' : '3rem')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Channel = styled.div`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  & > * {
    user-select: none;
  }
  div {
    .rotate {
      transform: rotate(180deg);
    }
  }
  .channel-title {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    cursor: pointer;
    gap: 0.3rem;
    color: ${({ theme }) => theme.colors.gray};
    p {
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: ${({ theme }) => theme.font.w_bold};
    }
  }
  .single-channel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.4rem;
    transition: 0.5s ease;

    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.background.active};
    }
    .channel-name {
      display: flex;
      font-size: 0.9rem;
      gap: 0.4rem;
    }
  }
`
// Messages
export const Messages = styled(Channel)`
  .message-title {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    cursor: pointer;
    gap: 0.3rem;
    color: ${({ theme }) => theme.colors.gray};
    p {
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: ${({ theme }) => theme.font.w_bold};
    }
  }
  .single-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.4rem;
    transition: 0.5s ease;
    margin-bottom: 0.5rem;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.background.active};
    }
    .message-name {
      display: flex;
      font-size: 0.9rem;
      gap: 0.4rem;
      align-items: center;
      img {
        width: 2rem;
        aspect-ratio: 1;
        border-radius: 0.5rem;
        object-fit: cover;
      }
    }
  }
  .more-friends {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 0.5rem;
    padding-left: 0.5rem;
    button {
      padding: 0.1rem 0.2rem;
      border-radius: 0.4rem;
      font-size: 1rem;
      background: ${({ theme }) => theme.background.active};
      color: ${({ theme }) => theme.colors.light};
      cursor: pointer;
    }
    span {
      font-size: 0.9rem;
      font-weight: ${({ theme }) => theme.font.w_bold};
    }
  }
`
