import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled.div`
  flex: 1;
  background: linear-gradient(140deg, #161819, #16191a, #15191b, #151a1d);
  padding-top: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* padding-bottom: 0.5rem; */
`
// NAVBAR
export const Navbar = styled.nav`
  display: flex;
  padding: 0.3rem;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
  position: sticky;
  padding: 0.3rem;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background.secondary};
`

export const Channel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`
export const Icon = styled.div``
export const Name = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.font.w_normal};
  word-spacing: -0.5px;
`
export const Desc = styled.p`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.w_bold};
  word-spacing: -0.5px;
`
// SEND MESSAGE
export const SendContainer = styled(motion.form)`
  background: ${({ theme }) => theme.background.active};
  width: 100%;
  margin-inline: auto;
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
  width: 100%;
  padding-left: 0.5rem;
  font-family: inherit;
  &::placeholder {
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.font.w_bold};
  }
`
export const CustomButton = styled(motion.button)`
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
export const Subs = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.75rem;
  span {
    background: ${({ theme }) => theme.background.active};
    padding: 0.1rem 0.2rem;
    border-radius: 0.1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
