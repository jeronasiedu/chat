import styled from 'styled-components'
export const Container = styled.div`
  overflow-y: scroll;
  min-height: min-content;
  min-height: --webkit-min-content;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.5rem 1rem;
  & > :first-child {
    margin-top: auto !important;
  }
`
export const SingleMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    min-width: 0;
  }
  background: ${({ theme }) => theme.background.sent};
  padding: 0.2rem 0.4rem;
  padding-bottom: 0.1rem;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.font.w_bold};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 50%;
  &:last-child {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 0.15rem;
      height: 100%;
      background: #01ad9b;
    }
  }
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
  align-self: flex-end;
  word-wrap: break-word;
  line-height: 1.3;
  &.friend {
    align-self: flex-start;
    background: ${({ theme }) => theme.background.received};
    border-radius: 0 1.2rem 1.2rem 1rem;
  }
  div {
    display: flex;
    margin-left: auto;
    gap: 0.1rem;
    align-items: center;
  }
  .text {
    margin-right: 0.4rem;
  }
`
export const Time = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.time};
  font-weight: ${({ theme }) => theme.font.w_light};
`
export const Tick = styled.span`
  color: ${({ theme }) => theme.colors.tick};
  transform: translate(0.2rem, 0.3rem);
`
