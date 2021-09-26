import Link from 'next/link'
import Styles from '../styles/Header.module.css'
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <Link href='/' >
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "0px"}}>
          <DiCssdeck size="3rem" />
          {/* <Span>Portfolio</Span> */}
          Portfolio
        </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#works">
              <div className={Styles.navlink}>Works</div>
            </Link>
          </li>
          <li>
            <Link href="#skills" >
            <div className={Styles.navlink}>Skills</div>
            </Link>
          </li>
          <li>
            <Link href="#about" >
            <div className={Styles.navlink}>About</div>
            </Link>
          </li>
          </ul>
      </nav>
      <ul>
          <div className = {Styles.socialIcons} href="https://github.com">
            <AiFillGithub size="2rem" />
          </div>
          <div className = {Styles.socialIcons}  href="https://linkedin.com">
            <AiFillLinkedin size="2rem" />
          </div>
          <div className = {Styles.socialIcons}  href="https://instagram.com">
            <AiFillInstagram size="2rem" />
          </div>
      </ul>
    </header>
  )
}