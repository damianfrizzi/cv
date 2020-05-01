import { Content } from 'components/content'
import { Header } from 'components/header'
import { Stripe, Stripes } from 'components/stripe'
import { PrismicDocument, PrismicPosition } from 'lib/prismic/types'
import { GetStaticProps, NextPage } from 'next'
import Prismic from 'prismic-javascript'
import { PrismicClient } from '../lib/prismic/config'

interface HomePageProps {
  positions: Array<PrismicDocument<PrismicPosition>>
}

const HomePage: NextPage<HomePageProps> = ({ positions }) => (
  <>
    <Stripe position={Stripes.Top} />
    <Header />
    <Content positions={positions} />
    <Stripe position={Stripes.Bottom} />
  </>
)

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
