import { createGlobalStyle } from 'styled-components'
import fontFiles from './fonts'

export default createGlobalStyle`
    @font-face {
        font-family: 'Ogg Regular';
        font-style: normal;
        font-weight: 300;
    src: url(${fontFiles.OggRomanEOT}) format('eot'),
            url(${fontFiles.OggRomanWOFF}) format('woff'),
            url(${fontFiles.OggRomanWOFF2}) format('woff2');
    }

    @font-face {
        font-family: 'Founders Grotesk Medium';
        font-style: normal;
        font-weight: 300;
        src: url(${fontFiles.FoundersGroteskEOT}) format('eot');
        src: url(${fontFiles.FoundersGroteskWOFF}) format('woff');
    }

    body {
        font-family: 'Founders Grotesk Medium'
    }
`
