import Head from 'next/head'
import Header from '../components/layouts/Header'
import Script from 'next/script'
import Main from '../components/layouts/Main'
//import Footer from '../components/layouts/Footer'
import {prepr} from '../lib/prepr'
import { Container } from '@mui/material'

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Ahmad Mahmoud</title>
        <meta name="description" content="My Personal Portfolio." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#4b3f72" />
        <meta name="theme-color" content="#4b3f72"></meta>
      </Head>
      <Script
        id="moment"
        src="https://www.momentcrm.com/embed"
        strategy="beforeInteractive"
      />
      <Script id="momentcrm">
        {`
        MomentCRM('init', {
          'teamVanityId': 'ahmad',
          'doChat': true,
          'doTracking': true,
        })
      `}
      </Script>
      <Container fluid="true" maxWidth="xl">
        <Header />
        <Main projects={projects} />
      </Container>
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

