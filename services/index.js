import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPlaces = async () => {
  const query = gql`
    query MyQuery {
      places(where: { acceptedPlace: true }) {
        address
        city
        id
        name
        location {
          latitude
          longitude
        }
        photo {
          url
        }
        googleUrl
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.places
}
