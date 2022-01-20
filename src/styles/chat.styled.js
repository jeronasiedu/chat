import styled from 'styled-components'
import { Total } from './sidebar.styled'
export const Container = styled.div`
  flex: 0.7;
  background: linear-gradient(140deg, #161819, #16191a, #15191b, #151a1d);
  padding: 1rem 0.5rem;
  position: relative;
`

export const Navbar = styled.nav`
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
  position: sticky;
  top: 0;
  left: 0;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); */
`

export const Channel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
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
export const Contacts = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;
`
export const Profile = styled.img`
  width: 1.8rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.3rem;
  cursor: pointer;
`
export const TotalContacts = styled(Total)`
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin-left: 0.1rem;
  cursor: pointer;
  background: #27292e;
`
