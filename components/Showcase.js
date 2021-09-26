import Link from 'next/link'
import Styles from '../styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div className={Styles.section} >
    <div className={Styles.sectionleft} >
      <p className={Styles.sectiontitle}>
        Welcome To <br />
        My Personal Portfolio
      </p>
      <p className={Styles.sectiontext}>
        The purpose of this site is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
      </p>
    </div>
  </div>
  )
}
