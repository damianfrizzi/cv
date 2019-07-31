import { createGlobalStyle } from 'styled-components'

const resetCss = `a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}`

export const GlobalStyle = createGlobalStyle`
${resetCss}

* {
  padding: 0;
  margin: 0;

  &::selection {
    background: ${props => props.theme.primaryColor};
    color: #fff;
  }
}

html,
body {
  font-size: 16px;

  @media print {
    font-size: 10px;
    -webkit-print-color-adjust: exact;
  }
}

body {
  font-display: swap;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #24292e;
}

small {
  font-size: 1rem;
  color: hsl(214, 7%, 47%);
}

h1,
h2, 
h3 {
  line-height: 1;
}

h1,
h2 {
}

h1 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-weight: 300;
  font-size: 1.5rem;
}


p {
  margin-top: 1rem;
}

li {
  padding: 3px 0;
}

a {
  display: inline-block;
  position: relative;
  z-index: 1;
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  transition: color 0.25s ease;

  &::before {
    content: "";
    color: #fff;
    position: absolute;
    z-index: -1;
    opacity: 0;
    right: -3px;
    left: -3px;
    height: 100%;
    background: ${props => props.theme.linkHoverColor};
    transition: all 0.25s ease;
  }

  &:hover {
    color: #fff;

    &::before {
      opacity: 1;
    }
  }
}

.container {
  margin: 0 auto;
  padding-right: 24px;
  padding-left: 24px;
  max-width: 1200px;

  @media (min-width: 940px), print {
    padding-right: 48px;
    padding-left: 48px;
  }
}

@page {
  margin: 0;
}
`
