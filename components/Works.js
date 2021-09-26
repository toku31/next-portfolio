import Styles from '../styles/Works.module.css'

export default function Works() {

  const workData = [
    {
      title: "Portfolio",
      skils: ["react.js", "next.js", "HTML", "CSS"],
      description: "Personal portfolio website",
      github: "https://github.com",
      visit: "https://google.com",
      id: 1,
    },
    {
      title: "E-Commerce",
      skils: ["react.js", "next.js", "HTML", "CSS"],
      description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. e-commerce applications are impressive.",
      github: "https://github.com",
      visit: "https://google.com",
      id: 2,
    }
  ]

  // console.log(workData)

  return (
    <div className={Styles.section}  id="works">
      <p className={Styles.sectiondivider} />
      <p className={Styles.sectiontitle}>Works</p>
      <ul>
        { workData.map((work) =>{
          return (
          <li key={work.id} className={Styles.sectiontext}>
            <p className={Styles.worktitle}>{work.title}</p>
            <p className={Styles.workdescription}>{work.description}</p>
            <span className={Styles.workgithub}>{work.github}</span>
            <span className={Styles.workvisit}>{work.visit}</span>
          </li>
          )
        })}
      </ul>
    </div>
  )
}