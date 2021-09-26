import Head from 'next/head'
import Styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import Showcase from './Showcase'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <Showcase />
      <div className={Styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcom to My Protfolio',
  description: 'My Protfolio'
}