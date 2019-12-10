import { FC } from 'react'
import styled from 'styled-components'

interface IIcon {
  path: string
  alt: string
}

const Intro = styled.div`
  width: 100%;
`

const Avatar = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: -24px;
  background-size: 80%;
  background-position: 50%;
  background-color: #f6f7f8;
  background-repeat: no-repeat;
  background-image: url('/static/images/damian-min.jpg');

  @media print {
    width: 170px;
    height: 170px;
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

  p {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  li {
    display: flex;
    align-items: center;
  }

  .container {
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 3.75rem;
    grid-row-gap: ${({ theme }) => theme.spacing(3)};
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
      grid-template-columns: 168px auto;
      justify-items: initial;
    }
  }
`

const ImageWrapper = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.primaryColor};
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

const Icon: FC<{ icon: IIcon }> = ({ icon }) => (
  <ImageWrapper>
    <img width={16} height={16} src={icon.path} alt={icon.alt} />
  </ImageWrapper>
)

export const Header: FC = () => (
  <Wrapper>
    <div className={'container'}>
      <Avatar />
      <Intro>
        <h1>Damian Frizzi</h1>
        <h3>Frontend Engineer</h3>
        <p>
          This CV was created using TypeScript, Next.js, and Styled Components. It can either be viewed as a static, automatically deployed site at{' '}
          <a href="https://dafri.io">dafri.io</a> or as a PDF generated using Puppeteer when accessing{' '}
          <a target="_blank" rel="noopener" href="https://dafri.io/pdf">
            dafri.io/pdf
          </a>
          . The source code is available on{' '}
          <a target="_blank" rel="noopener" href="https://github.com/damianfrizzi/cv">
            GitHub
          </a>
          .
        </p>
        <SubHeader>
          <ul>
            <li>
              <Icon icon={githubIcon} />
              <a href="https://github.com/damianfrizzi">github.com/damianfrizzi</a>
            </li>
            <li>
              <Icon icon={twitterIcon} />
              <a href="https://twitter.com/damianfrizzi">twitter.com/damianfrizzi</a>
            </li>
          </ul>

          <ul>
            <li>
              <Icon icon={emailIcon} />
              <a href="mailto:damianfrizzi@gmail.com">damianfrizzi@gmail.com</a>
            </li>
            <li>
              <Icon icon={phoneIcon} />
              <a href="tel:+41 79 739§ 03 27">+41 79 739 03 27</a>
            </li>
            <li>
              <Icon icon={pinIcon} />
              Hagenholzstrasse 84, 8050 Zürich
            </li>
          </ul>
        </SubHeader>
      </Intro>
    </div>
  </Wrapper>
)
