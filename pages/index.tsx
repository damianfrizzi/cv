import { Education } from 'components/education'
import { Experience } from 'components/experience'
import { Header } from 'components/header'
import { Languages } from 'components/languages'
import { Main } from 'components/main'
import { Skills } from 'components/skills'
import { Stripe, Stripes } from 'components/stripe'
import { PrismicClient } from 'lib/prismic/config'
import { PrismicDocument, PrismicEducation, PrismicLanguage, PrismicPosition, PrismicSkill } from 'lib/prismic/types'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Prismic from 'prismic-javascript'

interface HomePageProps {
  positions: PrismicDocument<PrismicPosition>[]
  educations: PrismicDocument<PrismicEducation>[]
  languages: PrismicDocument<PrismicLanguage>[]
  skills: PrismicDocument<PrismicSkill>[]
}

const HomePage: NextPage<HomePageProps> = ({ positions, educations, languages, skills }) => (
  <Main>
    <Head>
      <title>Damian Frizzi - Frontend Engineer</title>
    </Head>
    <Stripe position={Stripes.Top} />
    <Header />
    <Experience positions={positions} />
    <Education educations={educations} />
    <Skills skills={skills} />
    <Languages languages={languages} />
    <Stripe position={Stripes.Bottom} />
  </Main>
)

export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  const prismicAPI = await PrismicClient.getApi()
  const ref = previewData?.ref || prismicAPI.masterRef.ref

  const resPositions = await PrismicClient.query(Prismic.Predicates.at('document.type', 'position'), {
    ref,
    orderings: '[my.position.start_date desc]',
  })

  const resEducations = await PrismicClient.query(Prismic.Predicates.at('document.type', 'education'), {
    ref,
    orderings: '[my.education.start_date desc]',
  })

  const resLanguages = await PrismicClient.query(Prismic.Predicates.at('document.type', 'language'), {
    ref,
  })

  const resSkills = await PrismicClient.query(Prismic.Predicates.at('document.type', 'skill'), {
    ref,
    orderings: '[my.skill.progress desc]',
  })

  return {
    props: {
      preview,
      positions: resPositions.results ?? null,
      educations: resEducations.results ?? null,
      languages: resLanguages.results ?? null,
      skills: resSkills.results ?? null,
    },
  }
}

export default HomePage
