// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function addNewPlaces(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
      'Content-Type': 'multipart/form-data',
    },
  })

  const query = gql`
    mutation CreatePlace(
      $name: String!
      $address: String!
      $city: ID!
      $googleUrl: String!
      $photoUrl: String!
      $mealType: ID!
    ) {
      createPlace(
        data: {
          name: $name
          address: $address
          city: { connect: { id: $city } }
          googleUrl: $googleUrl
          photoUrl: $photoUrl
          mealType: { connect: { id: $mealType } }
        }
      ) {
        id
      }
    }
  `

  const result = await graphQLClient.request(query, req.body)

  return res.status(200).send(result)
}
