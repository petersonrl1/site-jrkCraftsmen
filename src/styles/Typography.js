import { createGlobalStyle } from 'styled-components';
import '@fontsource/libre-baskerville';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/100.css';

const Typography = createGlobalStyle`

h1, h2 {
  font-family: "Raleway";
  font-weight: 600;
}

p {
    font-family: "Libre Baskerville";
}
`;

export default Typography;
