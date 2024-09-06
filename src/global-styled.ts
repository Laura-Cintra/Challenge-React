import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

    *{
        font-family: "Nunito Sans", sans-serif;
        font-style: normal;
        padding: 0;
        margin: 0;
    }

`
export default GlobalStyle