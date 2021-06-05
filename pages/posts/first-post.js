import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h3>June 3, 2021</h3>
	    <h4> So I'm just going to start dropping text here to have a place to share my thoughts </h4>
      <p> When I asked a friend how to get started on a website to build a blog, he pointed me to Vercel. A couple of weeks later I 
	        finally clicked on the link and began setting up this website. After starting on the <a href="https://nextjs.org/learn/basics">Next.js tutorial</a>
          , and then jumping over to the tutorial on <a href="https://reactjs.org/docs/hello-world.html">React</a>, I'm now reading <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">
	        "A Re-Introduction to JavaScript!"</a> Maybe I should just go back and finish that Next.js tutorial?... (so, yes I'm doing that now.)
      </p>
      <p>Putting a pin in this for now. Leaving off here: <a href="https://nextjs.org/learn/basics/assets-metadata-css/styling-tips">Styling Tips</a>
      </p>
      <p> More to come!</p>
      <p>-Jason</p>
    </Layout>
  )
}