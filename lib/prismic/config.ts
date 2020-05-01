import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://curriculumvitae.cdn.prismic.io/api/v2'
export const accessToken = ''

const createClientOptions = (req = null, prismicAccessToken: string | null = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}

  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const PrismicClient = Prismic.client(apiEndpoint, createClientOptions(null, accessToken))
