import Link from 'next/link'
import Styles from '../styles/Works.module.css'

export default function Works() {

  const workData = [
      {
      title: "E-Commerce ProShop",
      skils: ["react.js", "next.js", "HTML", "CSS"],
      description: "フロントエンドはReact.js & Redux バックエンドはDjangoフレームワークを用いて、Eコマースサイトを作成しました。データベースはPostgresです。Eメール: user@gmail.com パスワード: test1357でログインできます。",
      github: "https://github.com/toku31/react-django-ecommerce",
      github2: "",
      visit: "https://ecommerce-proshop01.herokuapp.com",
      id: 1,
    },
    {
      title: "ITイベント情報",
      skils: ["react.js", "next.js", "HTML", "CSS"],
      description: "小規模のIT勉強会やセミナー等を通知できるサイトを作成しました。フロントエンドはNext.js, バックエンドはStrapiというヘッドレスCMSを使っています。",
      github: "https://github.com/toku31/itevents-nextjs-frontend",
      github2: "https://github.com/toku31/iteventsbackend07",
      visit: "https://iteventsfrontend.vercel.app",
      id: 2,
    },
    {
      title: "不動産サイト BT Real Estate",
      skils: ["react.js", "next.js", "HTML", "CSS"],
      description: "不動産サイトを作成しました。画面はフリーの素材を借りていて、主にサーバーサイドをDjangoで作りました。",
      github: "https://github.com/toku31/btre_project",
      github2: "",
      visit: "https://btrealestate-site.herokuapp.com/",
      id: 3,
    },
    {
      title: "ショッピングサイト React Shopping Cart",
      skils: ["react.js", "next.js", "HTML", "CSS"],
      description: "React.jsを用いてショッピングカートのサイトを作成しました。値段やサイズで並び変えできるようにしました。",
      github: "https://github.com/toku31/btre_project",
      github2: "",
      visit: "https://react-shopping-cart-test1.herokuapp.com/",
      id: 4,
    },
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
            <span className={Styles.workvisit}>
              <Link href={work.visit}><a target="_blank">Visit</a></Link>
            </span>

            <span className={Styles.workgithub}>
              <Link href={work.github}><a target="_blank">Code</a></Link>
            </span>

            {/* <span className={Styles.workgithub}>
              <Link href={work.github2}><a target="_blank">Code2</a></Link>
            </span> */}
          </li>
          )
        })}
      </ul>
    </div>
  )
}