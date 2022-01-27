import styled from 'styled-components'
export const Container = styled.div`
  flex: 0.25;
  padding-bottom: 0.5rem;
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
  position: sticky;
  z-index: 10;
  inset: 0;
`
export const Input = styled.input`
  background: ${({ theme }) => theme.background.chatarea};
  color: ${({ theme }) => theme.colors.secondary};
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
  border-radius: 0.3rem;
`
export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const CustomAvatar = styled.div`
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

export const Total = styled.p`
  background: ${({ theme }) => theme.background.active};
  font-size: 0.6rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Channel = styled.div`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  & > * {
    user-select: none;
  }
  .right-side-message {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .last-message-date {
      font-weight: ${({ theme }) => theme.font.w_bold};
    }
  }
  .last-message {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 10rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.8rem;
  }
  .active {
    background: ${({ theme }) => theme.background.active};
    color: inherit;
    border-radius: 0.4rem;
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
    :hover {
      background: ${({ theme }) => theme.background.hover};
    }

    .channel-name {
      display: flex;
      font-size: 0.9rem;
      gap: 0.5rem;
      align-items: center;
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
    cursor: pointer;
    :hover {
      background: ${({ theme }) => theme.background.hover};
    }
    .message-name {
      display: flex;
      font-size: 0.9rem;
      gap: 0.5rem;
      align-items: center;
      img {
        width: 2rem;
        aspect-ratio: 1;
        border-radius: 0.5rem;
        object-fit: cover;
      }
    }
  }
`
