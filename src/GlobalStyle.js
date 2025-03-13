import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: ${(props)=> props.theme.body.background};
        margin:0;
        transition: 0.3s;
    }
`;