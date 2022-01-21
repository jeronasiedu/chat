import styled from 'styled-components'
export const Container = styled.div`
  background: ${({ theme }) => theme.background.primary};
  width: 30%;
  padding: 0.5rem 0.3rem;
  padding-top: 0;
  color: ${({ theme }) => theme.colors.secondary};
  overflow: scroll;

  .up {
    display: flex;
    padding: 0.3rem 0;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    position: sticky;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.background.primary};
    z-index: 5;
  }
  .media {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  .files {
    margin-top: 0.3rem;
  }
`
export const Total = styled.p`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.w_bold};
`
export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  img {
    border-radius: 0.5rem;
    width: calc(50% - 0.5rem);
    object-fit: cover;
    max-height: 6rem;
    height: auto;
  }
  button {
    padding: 0.5rem;
    width: calc(50% - 0.5rem);
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.font.w_bold};
    background: ${({ theme }) => theme.background.active};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
  }
`
