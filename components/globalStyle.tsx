import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #d13800;
  --primary-hover-color: #862318;
  --default-padding: 24px;
  --default-negative-padding: -24px;
  --image-width: 168px;
  --image-height: 192px;
}

@media print {
  :root {
    --default-padding: 12px;
    --image-width: 148px;
    --image-height: 172px;
  }
}

* {
  padding: 0;
  margin: 0;

  &::selection {
    background: var(--primary-color);
    color: #fff;
  }
}

a {
  line-height: 100%;
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
h2 {
  font-weight: 400;
}

h2 {
  line-height: 1.25;
}

p {
  margin-top: 1rem;
}

ul {
  list-style: none;
}

li {
  padding: 3px 0;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: transparent 2px solid;
  transition: all 0.25s ease;
  max-width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;

  &:hover {
    color: var(--primary-hover-color);
    border-color: var(--primary-hover-color);
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
