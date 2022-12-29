import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
    }
    body {
        background-color: #e9ecef;
        line-height: 1.6;
        font-family: 'Nunito';
        margin: 0 !important;
        
    }
`
export default GlobalStyle
