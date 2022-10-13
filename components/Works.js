import Link from 'next/link'
import Styles from '../styles/Works.module.css'

export default function Works() {

  const workData = [
    {
      title: "開発メモ用ブログ",
      skils: ["react.js", "Next.js", "HTML", "CSS"],
      description: "Next.jsを使って簡素なMarkdownブログをつくりました。markdownファイルにはfront-matterを用いて記事のmeta情報を管理しています。",
      github: "https://github.com/toku31/next-devspace-blog",
      github2: "",
      visit: "https://next-devspace-blog1.vercel.app/",
      id: 2,
    },
    {
      title: "物件探しアプリ",
      skils: ["React", "Firebase"],
      description: "ReactとFirebaseを用いて不動産物件を売買できるアプリをつくりました。メールアドレスやGoogleアカウントで認証して、Cloud FireStore(クラウドデータベース)にデータ保存できるようにしました。",
      github: "https://github.com/toku31/react-house-market",
      github2: "",
      visit: "https://react-house-market.vercel.app/",
      id: 3,
    },
    {
      title: "ITイベント情報",
      skils: ["react.js", "Next.js", "HTML", "CSS"],
      description: "小規模のIT勉強会やセミナー等を通知できるサイトを作成しました。フロントエンドはNext.js, バックエンドはStrapiというヘッドレスCMSを使っています。",
      github: "https://github.com/toku31/itevents-nextjs-frontend",
      github2: "https://github.com/toku31/iteventsbackend07",
      visit: "https://iteventsfrontend.vercel.app",
      id: 5,
    },
    {
      title: "E-Commerce ProShop",
      skils: ["react.js", "Django", "HTML", "CSS"],
      description: "フロントエンドはReact.js & Redux バックエンドはDjangoフレームワークを用いて、Eコマースサイトを作成しました。データベースはPostgresを使っています。",
      github: "https://github.com/toku31/react-django-ecommerce",
      github2: "",
      // visit: "https://ecommerce-proshop01.herokuapp.com",
      id: 1,
    },
    {
      title: "開発用お気に入り保存アプリ",
      skils: ["Django", "Bootstrap"],
      description: "Djangoを用いて開発向けサイトをお気に入りとして保存できるアプリを作成しました。カテゴリーやタグで分類して表示したり、キーワード検索する機能も追加しています。フロントエンドはBootstrapを、データーベースはPostgresを使いました。",
      github: "https://github.com/toku31/sites-saver",
      github2: "",
      // visit: "https://tranquil-fortress-87504.herokuapp.com/",
      id: 4,
    },
    {
      title: "不動産サイト BT Real Estate",
      skils: ["react.js", "Next.js", "HTML", "CSS"],
      description: "不動産サイトを作成しました。画面はフリーの素材を借りていて、主にサーバーサイドをDjangoで作りました。",
      github: "https://github.com/toku31/btre_project",
      github2: "",
      // visit: "https://btrealestate-site.herokuapp.com/",
      id: 6,
    },
    {
      title: "目標設定アプリ Goal Setter",
      skils: ["MongoDB", "Express", "React", "Node.js"],
      description: "MERNスタック(MongoDB, Express, React, Node.js)を使って目標を覚書するアプリをつくりました。アプリ自体はシンプルですがCRUDやRest API, JWT認証機能, React Toolkitを実装しています。 ",
      github: "https://github.com/toku31/mern-goalsetter",
      github2: "",
      // visit: "https://mern-goalsetter01.herokuapp.com/login",
      id: 4,
    },
    // {
    //   title: "ショッピングサイト React Shopping Cart",
    //   skils: ["react.js", "Next.js", "HTML", "CSS"],
    //   description: "React.jsを用いてショッピングカートのサイトを作成しました。値段やサイズで並び変えできるようにしました。",
    //   github: "https://github.com/toku31/react-shopping-cart",
    //   github2: "",
    //   visit: "https://react-shopping-cart-test1.herokuapp.com/",
    //   id: 7,
    // },
  ]

  // console.log(workData)

  return (
    <div className={Styles.section}  id="works">
      <p className={Styles.sectiondivider} />
      <p className={Styles.sectiontitle}>Works</p>
      <ul>
        { workData.map((work) =>{
          // console.log(work)
          for (let i = 0; i < work.skils.length; i++) {
            // console.log(work.skils[i]);
          }
          return (
          <li key={work.id} className={Styles.sectiontext}>
            <p className={Styles.worktitle}>{work.title}</p>
            <p className={Styles.workdescription}>{work.description}</p>
            {work.visit && (
            <span className={Styles.workvisit}>
              <Link href={work.visit}><a target="_blank">Visit</a></Link>
            </span>
            )}
            <span className={Styles.workgithub}>
              <Link href={work.github}><a target="_blank">Code</a></Link>
            </span>

            {work.github2 && (
            <span className={Styles.workgithub}>
              <Link href={work.github2}><a target="_blank">Code2</a></Link>
            </span>
            )}
          </li>
          )
        })}
      </ul>
    </div>
  )
}