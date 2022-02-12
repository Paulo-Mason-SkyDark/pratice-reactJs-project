import px2vw from '../utils/px2vw';
import{ createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

 :root {
    body {
        background: #F2F3F5;
    }
    
    body, input, textarea, button, p, h1 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: #707070;

        @media (min-width: 768px) {
            font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        color: #707070;
        }

        @media (min-width: 1024px) {
            font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 5px;
        line-height: 10px;
        color: #707070;
        }
    }
 }


`;