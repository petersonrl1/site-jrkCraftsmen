import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* ---------- */
    /* RESET based on Kevin Powell. We are also importing normalize.css in the Layout component. */
    /* ---------- */

    /* body */
    body {
        line-height: 1.5;
        min-height: 100vh;
    }

    /* images */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* form elements */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* remove animations for people who've turned them off */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.1ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.1ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* ---------- */
    /* Utility Classes */
    /* ---------- */

    .flex {
        display: flex;
        gap: var(--gap, 1rem);
    }

    .grid {
        display: grid;
        gap: var(--gap, 1rem);
    }

    .container {
        padding-inline: 2em;
        margin-inline: auto;
        max-width: 80rem;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border: 0;
    }

/* ----------------------------- */

    :root {
    /* basic color palette: https://coolors.co/374258-27343e-e7f5ff-bec1c3-ebebeb */
    --blue  : #374258;
    --darkblue: #27343e;
    --lightblue: #e7f5ff;
    --lightgrey: #bec1c3;
    --offwhite: #EBEBEB;
    /* additional colors */
    --white: #ffffff;
    --robinblue:#cfebff;
    --darkgrey: #7c868a;
    }

    html {
        background-color: var(--lightbl);
    }
    
    fieldset {
        border-color: rgba(0,0,0,0.1);
        border-width: 1px;
    }
`;

export default GlobalStyles;
