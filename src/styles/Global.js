import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline:none;
    list-style: none;
    text-decoration: none;
    scrollbar-width: none
}
a{
    color:#bcbcbd;
}
*
::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
body{

    font-family: poppins;
    background-repeat: no-repeat;
    background: #268FE1;
    background: -webkit-linear-gradient(top right, #268FE1, #AA5CC9);
    background: -moz-linear-gradient(top right, #268FE1, #AA5CC9);
    background: linear-gradient(to bottom left, #268FE1, #AA5CC9);
    background-size: 100% 120%;
    background-repeat: no-repeat;

}
input,button{
    font-family: inherit;
}

`
export default GlobalStyle
