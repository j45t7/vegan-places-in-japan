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
        mealType {
          name
        }
        googleUrl
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.places
}
export const getMealTypes = async () => {
  const query = gql`
    query MyQuery {
      mealTypes {
        id
        name
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.mealTypes
}

export const submitPlace = async (obj) => {
  const result = await fetch('/api/add-new-place', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}
