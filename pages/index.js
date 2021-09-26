import Layout from '../components/Layout'
import Image from 'next/image'
import Works from '../components/Works'
import Skills from '../components/Skills'
import About from '../components/About'


export default function Home() {
  return (
    <Layout>
      <Works />
      <Skills />
      <About />
    </Layout>
  )
}

    //    <Head>
    //      <title>My Portfolio</title>
    //      <meta name="description" content="My Portfolio Website" />
    //      <link rel="icon" href="/favicon.ico" />
    //    </Head>
    //
    // <Image src="/main.png" alt="Vercel Logo" width={100} height={100} />