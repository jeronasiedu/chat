import styled from 'styled-components'
export const Container = styled.div`
  background: ${({ theme }) => theme.background.primary};
  max-width: 70rem;
  margin: 0.5rem auto;
  border-radius: 0.2rem;
  color: #fff;
  display: flex;
  min-height: 500px;
  max-height: 95vh;
  overflow: hidden;
`
