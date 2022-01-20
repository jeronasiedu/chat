import styled from 'styled-components'
export const Container = styled.aside`
  flex: 0.08;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 0.5rem;
  background: ${({ theme }) => theme.background.minside};
`

export const Group = styled.div`
  display: grid;
  place-items: center;
  padding: 0.2rem;
  border-radius: 0.4rem;
  background: #2b4459;
  &.active {
    /* Work on Active Class */
  }
`
export const GroupIcon = styled.img`
  width: 2rem;
  aspect-ratio: 1;
  cursor: pointer;
`
export const Button = styled.button`
  padding: 0.4rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  background: #236bfe;
  color: #fff;
  display: grid;
  align-items: center;
  justify-content: center;
`
