import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface IIcon {
  path: string
  alt: string
}

const Intro = styled.div`
  width: 100%;
`

const Hexagon = styled.div`
  position: relative;
  width: var(--image-width);
  height: var(--image-height);
  background: var(--primary-color);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    clip-path: inherit;
  }

  &::before {
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    background: #fff;
  }

  &::after {
    top: 12px;
    right: 12px;
    bottom: 12px;
    left: 12px;
    background-color: #ddd;
    background-image: url('/static/images/damian.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 10%;
  }
`

const SubHeader = styled.div`
  @media (min-width: 940px), print {
    display: flex;

    ul {
      flex: 1;
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  padding: 24px 0;

  h1 {
    margin-top: -12px;
  }

  h2 {
    margin: -6px 0 12px;
    font-weight: 300;
  }

  p {
    margin-bottom: 18px;
  }

  li {
    display: flex;
    align-items: center;
  }

  .container {
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 60px;
    grid-row-gap: 24px;
    justify-items: center;
    align-items: center;
  }

  @media print {
    img {
      width: 12px;
      height: 12px;
    }
  }

  @media (min-width: 940px), print {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .container {
      grid-template-columns: var(--image-width) auto;
      justify-items: initial;
    }
  }
`

const ImageWrapper = styled.div`
  display: inline-flex;
  background: var(--primary-color);
  border-radius: 50%;
  padding: 6px;
  margin-right: 0.75rem;
  vertical-align: middle;
`

const githubIcon: IIcon = {
  path: '/static/images/github.svg',
  alt: 'Github Icon'
}
const twitterIcon: IIcon = {
  path: '/static/images/twitter.svg',
  alt: 'Twitter Icon'
}
const emailIcon: IIcon = {
  path: '/static/images/email.svg',
  alt: 'Email Icon'
}
const phoneIcon: IIcon = {
  path: '/static/images/phone.svg',
  alt: 'Phone Icon'
}
const pinIcon: IIcon = {
  path: '/static/images/pin.svg',
  alt: 'Pin Icon'
}

const getIcon: FunctionComponent<IIcon> = icon => (
  <ImageWrapper>
    <img width={16} height={16} src={icon.path} alt={icon.alt} />
  </ImageWrapper>
)

export const Header: FunctionComponent = () => (
  <Wrapper>
    <div className={'container'}>
      <Hexagon />
      <Intro>
        <h1>Damian Frizzi</h1>
        <h2>Frontend Engineer</h2>
        <p>
          This CV was generated from a serverless deployment that I created with TypeScript, Next.js and Styled-Components.
          <br />
          You can checkout the source code at <a href="https://github.com/damianfrizzi/cv">GitHub</a>, have a look at the{' '}
          <a href="https://dafri.io">online version</a> or <a href="https://dafri.io/pdf">generate the PDF on your own</a> by a serverless Chrome via Puppeteer.
        </p>
        <SubHeader>
          <ul>
            <li>
              {getIcon(githubIcon)}
              <a href="https://github.com/damianfrizzi">github.com/damianfrizzi</a>
            </li>
            <li>
              {getIcon(twitterIcon)}
              <a href="https://twitter.com/damianfrizzi">twitter.com/damianfrizzi</a>
            </li>
          </ul>

          <ul>
            <li>
              {getIcon(emailIcon)}
              <a href="mailto:damianfrizzi@gmail.com">damianfrizzi@gmail.com</a>
            </li>
            <li>
              {getIcon(phoneIcon)}
              <a href="tel:+41 79 739§ 03 27">+41 79 739 03 27</a>
            </li>
            <li>
              {getIcon(pinIcon)}
              Hagenholzstrasse 84, 8050 Zürich
            </li>
          </ul>
        </SubHeader>
      </Intro>
    </div>
  </Wrapper>
)
