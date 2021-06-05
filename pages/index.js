import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> This is a placeholder for a future website showcasing the work of <a href="https://www.linkedin.com/in/jasonbreen/">Jason Breen, PE.</a></p>
        <p className="description">
        <Link href="/posts/first-post">
          <a>Click here to go to my posts page</a>
        </Link>
        </p>
      </section>
    </Layout>
  )
}