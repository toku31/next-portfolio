import Link from 'next/link'
import Styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { getURL } from 'next/dist/next-server/lib/utils';

// import { SocialIcons } from '../Header/HeaderStyles';
// import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

export default function Footer() {
  return (
      <footer className={Styles.footer}>
        {/* <p>Copyright &copy; DJ Events 2021</p>
        <p>
          <Link href='/about'>About This Project</Link>
        </p> */}
          <ul className = {Styles.linklist}>
            <p>
              Call <a href="tel:314-343-3432">314-343-3432</a>
            </p>
            <p>
              Email <a href="mailto:contact@jsmastery.com">
                contact@jsmastery.com </a>
            </p>
          </ul>
          <ul className = {Styles.socialIconsContainer}>
            <p>Innovating one project at a time </p>
              <ul className = {Styles.icons}>
                <p className = {Styles.socialIcons} href="https://google.com">
                  <AiFillGithub size="2rem" />
                </p>
                <p className = {Styles.socialIcons} href="https://google.com">
                  <AiFillLinkedin size="2rem" />
                </p>
                <p className = {Styles.socialIcons}href="https://google.com">
                  <AiFillInstagram size="2rem" />
                </p>
              </ul>
          </ul>
      </footer>
  )
}
