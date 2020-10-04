import { FC } from 'react'
import styles from './header.module.scss'

interface Icon {
  path: string
  alt: string
}

const githubIcon: Icon = {
  path: '/static/images/github.svg',
  alt: 'Github Icon',
}

const twitterIcon: Icon = {
  path: '/static/images/twitter.svg',
  alt: 'Twitter Icon',
}

const emailIcon: Icon = {
  path: '/static/images/email.svg',
  alt: 'Email Icon',
}

const phoneIcon: Icon = {
  path: '/static/images/phone.svg',
  alt: 'Phone Icon',
}

const pinIcon: Icon = {
  path: '/static/images/pin.svg',
  alt: 'Pin Icon',
}

const Icon: FC<{ icon: Icon }> = ({ icon }) => (
  <div className={styles.icon}>
    <img width={16} height={16} src={icon.path} alt={icon.alt} />
  </div>
)

export const Header: FC = () => (
  <div className={styles.wrapper}>
    <div className={'container'}>
      <div className={styles.avatar} />
      <div className={styles.intro}>
        <h1>Damian Frizzi</h1>
        <h3>Frontend Engineer</h3>
        <p>
          This resume was created using TypeScript, Next.js, and Prismic as a headless CMS. It can either be viewed as a static site at{' '}
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
        <div className={styles.links}>
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
        </div>
      </div>
    </div>
  </div>
)
