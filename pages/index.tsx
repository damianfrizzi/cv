import { Education } from 'components/education'
import { Experience } from 'components/experience'
import { Header } from 'components/header'
import { Languages } from 'components/languages'
import { Skills } from 'components/skills'
import { Stripe, Stripes } from 'components/stripe'
import { PrismicDocument, PrismicEducation, PrismicPosition } from 'lib/prismic/types'
import { GetStaticProps, NextPage } from 'next'
import Prismic from 'prismic-javascript'
import { PrismicClient } from '../lib/prismic/config'

interface HomePageProps {
  positions: Array<PrismicDocument<PrismicPosition>>
  educations: Array<PrismicDocument<PrismicEducation>>
}

const HomePage: NextPage<HomePageProps> = ({ positions, educations }) => (
  <>
    <Stripe position={Stripes.Top} />
    <Header />
    <main>
      <Experience positions={positions} />
      <Education educations={educations} />
      <Skills />
      <Languages />
    </main>
    <Stripe position={Stripes.Bottom} />
  </>
)

export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  const prismicAPI = await PrismicClient.getApi()
  const ref = previewData?.ref || prismicAPI.masterRef.ref

  const resPositions = await PrismicClient.query(Prismic.Predicates.at('document.type', 'position'), {
    ref,
    orderings: '[my.position.start_date desc]'
  })

  const resEducations = await PrismicClient.query(Prismic.Predicates.at('document.type', 'education'), {
    ref,
    orderings: '[my.position.start_date desc]'
  })

  return {
    props: {
      preview,
      positions: resPositions.results ?? null,
      educations: resEducations.results ?? null
    }
  }
}

export default HomePage
