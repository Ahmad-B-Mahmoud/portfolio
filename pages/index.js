import Head from 'next/head'
import Header from '../components/layouts/Header'
import Script from 'next/script'
import Main from '../components/layouts/Main'
//import Footer from '../components/layouts/Footer'
import {prepr} from '../lib/prepr'

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Ahmad Mahmoud</title>
        <meta name="description" content="My Personal Portfolio." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script
        id="moment"
        src="https://www.momentcrm.com/embed"
      />
        <Script id="momentcrm">
          {
          MomentCRM('init', {
            'teamVanityId': 'ahmad',
            'doChat': true,
            'doTracking': true,
          })
        }
        </Script>
      <Header />
      <Main projects={projects} />
    </div>
  )
}

export async function getStaticProps() {
  
  // Query publications
  const getprojects = await prepr
    .graphqlQuery(`{
      Projects(limit : 10 ) {
        items {
          _id,
          title,
          description,
          thumbnail {
            url,
            height,
            width
          },
          site_url,
          github_ripo,
          site_icon {
            url,
            height,
            width
          },
          build_with {
            url,
            height,
            width
          }
        }
      }
      }`)
    .fetch();

  // Pass publications as props
  return {
    props: {
      projects: getprojects.data.Projects.items
    },
  };
}

