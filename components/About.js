import Styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={Styles.section}  id="about">
      <p className={Styles.sectiondivider} />
      <p className={Styles.sectiontitle}>About</p>
      <p>My name is Yoshiyuki Tokushige.</p>
      <p>My recent interests are web developing, machine learning, and blockchain.</p>
      <p>徳茂善之と申します。</p>
      
    </div>
  )
}
