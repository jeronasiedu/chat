import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalStyle from './styles/Global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
)
