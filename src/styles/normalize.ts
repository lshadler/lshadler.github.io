import {
  dimensions, colors, breakpoints,
} from './variables';
import { getEmSize } from './mixins';

export default `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    --bg: ${colors.ui.whisper};
    --textNormal: ${colors.black};
    --textTitle: ${colors.brand};
    --textLink: ${colors.brand};
    --textCard: ${colors.white};
    --cardBg: darkslategray;
    --textLinkHover: goldenrod;
    --hr: hsla(0, 0%, 0%, 0.2);

    background-color: var(--bg);
    color: var(--textNormal);
    
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    a {
      color: var(--textLink);
      text-decoration: none;

      :hover {
        color: var(--textLinkHover)
      }
    }
  }

  body.dark {
    -webkit-font-smoothing: antialiased;

    --bg: darkslategray;
    --textNormal: ${colors.white};
    --textTitle: ${colors.white};
    --textLink: goldenrod;
    --textLinkHover: ${colors.white};
    --hr: hsla(0, 0%, 100%, 0.2);
  }

  

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: var(--textTitle);
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    color: var(--textNormal);
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
     color: var(--textNormal);
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  #graph-id-graph-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`;
