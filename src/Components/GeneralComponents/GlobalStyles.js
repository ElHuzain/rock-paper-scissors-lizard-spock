import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Resets */
*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Barlow Semi Condensed", arial;
    font-weight: 600;
}

p::selection, h1::selection, img::selection{
    background-color: unset;
}

#root {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    gap: 1rem;
    height: 100vh;
    width: 100%;
    background-image: ${({ theme }) => theme.colors.background};
}
`

export default GlobalStyle;