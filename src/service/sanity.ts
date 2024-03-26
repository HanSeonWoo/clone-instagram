import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2024-01-01',
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
})
