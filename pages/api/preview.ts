import { PrismicClient } from 'lib/prismic/config'
import { NextApiRequest, NextApiResponse } from 'next'

const SECRET = process.env.PRISMIC_PREVIEW_SECRET

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  // This secret should only be know to this API route and the CMS
  if (req.query.secret !== SECRET || !req.query.documentId) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const ref = req.query.token as string
  const documentId = req.query.documentId as string
  const url = PrismicClient.getPreviewResolver(ref, documentId)

  const document = await PrismicClient.getByID(documentId as string, {
    ref
  })

  // If the document doesn't exist prevent preview mode from being enabled
  if (!document || !document.lang) {
    return res.status(401).json({ message: 'Invalid document' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({ ref })

  // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )
  res.end()
}
