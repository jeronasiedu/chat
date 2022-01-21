import styled from 'styled-components'
export const Container = styled.div`
  background: ${({ theme }) => theme.background.primary};
  max-width: 70rem;
  margin: 1rem auto;
  border-radius: 0.2rem;
  color: #fff;
  display: flex;
  min-height: 550px;
  max-height: 95vh;
  overflow: hidden;
`
