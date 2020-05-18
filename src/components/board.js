import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const APOLLO_QUERY = gql`
  {
    board {
      id
      title
      cards {
        task
        stories {
          note
        }
      }
    }
  }
`
const setBoardData = data => {
  console.log("Done", data)
}
const Board = () => {
  const { loading, error, data: apolloData } = useQuery(APOLLO_QUERY, {
    onCompleted: setBoardData,
  })
  return (
    <>
      {loading && <p>Loading Sara...</p>}
      {error && <p>Error: ${error.message}</p>}
      {apolloData && <pre>{JSON.stringify(apolloData, null, 2)}</pre>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}
export default Board
