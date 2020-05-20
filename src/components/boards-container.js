import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Board from "./board"

const BOARDS_APLLO_QUERY = gql`
  {
    board {
      id
      title
    }
  }
`
const BoardsContainer = () => {
  const { loading, error, data } = useQuery(BOARDS_APLLO_QUERY)
  return (
    <>
      {loading && <p>Loading Boards...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.board.map(aBoard => <Board data={aBoard} />)}
    </>
  )
}
export default BoardsContainer
