import { PrismicDocument, PrismicPosition } from 'lib/prismic/types'
import { GetStaticProps, NextPage } from 'next'
import Prismic from 'prismic-javascript'
import { Layout } from '../components/layout'
import { PrismicClient } from '../lib/prismic/config'

interface HomePageProps {
  positions: Array<PrismicDocument<PrismicPosition>>
}

const HomePage: NextPage<HomePageProps> = ({ positions }) => <Layout positions={positions} />

export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  const prismicAPI = await PrismicClient.getApi()
  const ref = previewData?.ref || prismicAPI.masterRef.ref

  const res = await PrismicClient.query(Prismic.Predicates.at('document.type', 'position'), {
    ref,
    orderings: '[my.position.start_date desc]'
  })

  return {
    props: {
      preview,
      positions: res.results ?? null
    }
  }
}

export default HomePage
