import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  body {
    margin: 0;
    background: #141414;
    color: #fff;
    height: 100vh;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  * {
    margin: 0;
  }

  .gm-ui-hover-effect {
    color: #fff !important;
  }

  .gm-style-iw {
    background: #001753 !important;
    top: 3.80rem !important;
  }

  .gm-style-iw-t::after {
    background: #001753 !important;
    display: none !important;
  }

`;
