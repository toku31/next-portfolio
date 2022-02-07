import Link from 'next/link'
import Styles from '../styles/Header.module.css'
import { DiCssdeck } from 'react-icons/di';
import { FiMoon, FiSun } from 'react-icons/fi'
import { AiFillDatabase, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiTwotoneHome } from 'react-icons/ai';
import { useState } from 'react';

export default function Header() {

  const [color, setcolor] = useState(false)

  const handleClick = () => {
    setcolor(!color)
    console.log(color)
    if (color){
      document.body.style.backgroundColor = "#196989"
      // document.header.style.backgroundColor = "#4ebb7d"
    } else {
      document.body.style.backgroundColor = "black"
    }
  }

  // const themeBtn = document.querySelector('.theme')

  return (
    <header className={Styles.header} style={color ? {backgroundColor: "black"} : {backgroundColor: "#518c84"}}>
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
      <div>
        <button className="theme"  onClick={handleClick}>{color ? <FiSun /> : < FiMoon/> }</button>
      </div>
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