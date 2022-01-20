import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled.div`
  position: relative;
  height: 100%;
  padding: 0.2rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
`
export const MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 87%;
  margin-bottom: 0.2rem;
  padding: 0.3rem;
`
export const SendContainer = styled(motion.form)`
  background: ${({ theme }) => theme.background.active};
  width: 85%;
  margin-inline: auto;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`
export const Input = styled.input`
  flex: 1;
  background: none;
  padding: 0.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.1rem;
  padding-left: 0.5rem;
  font-family: inherit;
  &::placeholder {
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.font.w_bold};
  }
`
export const IconButton = styled(motion.button)`
  background: transparent;
  font-size: 1.3rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    transform: scale(0.9);
  }
`

export const SingleMessage = styled.li`
  background: ${({ theme }) => theme.background.sent};
  padding: 0.2rem 0.4rem;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.font.w_bold};
  border-radius: 1.2rem 0 1rem 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
  word-wrap: break-word;
  max-width: 17rem;
  line-height: 1.3;
`
export const Messages = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  &.friend {
    align-items: flex-start;
    ${SingleMessage} {
      background: ${({ theme }) => theme.background.received};
      border-radius: 0 1.2rem 1.2rem 1rem;
    }
  }
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
`
