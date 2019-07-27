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
        line-height: 22px;
        src: url(${fontFiles.FoundersGroteskEOT}) format('eot');
        src: url(${fontFiles.FoundersGroteskWOFF}) format('woff');
    }

        @font-face {
        font-family: 'Founders Grotesk Regular';
        font-style: normal;
        font-weight: 300;
        line-height: 22px;
        src: url(${fontFiles.FoundersGroteskRegEOT}) format('eot');
        src: url(${fontFiles.FoundersGroteskRegWOFF}) format('woff');
    }

    body {
        font-family: 'Founders Grotesk Regular'
    }
`
