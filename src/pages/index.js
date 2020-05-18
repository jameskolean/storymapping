import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { makeStyles } from "@material-ui/core/styles"
import StickyNote from "../components/sticky-note"
import Typography from "@material-ui/core/Typography"
import AddIcon from "@material-ui/icons/Add"
import IconButton from "@material-ui/core/IconButton"
import Layout from "../templates/Layout"
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core"
import Cards from "../components/cards.js"

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

const useStyles = makeStyles(theme => ({
  cell: {
    minWidth: 175,
    width: 175,
    padding: 10,
  },
  veriticalList: {
    padding: 0,
    verticalAlign: "top",
  },
  title: {
    fontSize: "inherit",
  },
  root: {
    height: 132,
  },
}))

const Index = () => {
  const [board, setBoard] = useState(null)
  const [title, setTitle] = useState("hello")
  useQuery(APOLLO_QUERY, {
    onCompleted: data => {
      console.log("data", data.board[0].cards)
      setBoard(data.board[0].cards)
      setTitle(data.board[0].title)
    },
  })
  //this need to use id and call Hasura
  const deleteTask = id => {
    //   console.log(board, taskIndex)
    //   const newBoard = Object.assign([], board)
    //   delete newBoard[taskIndex]
    //   setBoard(newBoard)
  }

  //this need to use id and call Hasura
  const deleteStory = (taskId, storyId) => {
    //   console.log(board, taskIndex, storyIndex)
    //   const newBoard = Object.assign([], board)
    //   delete newBoard[taskIndex].stories[storyIndex]
    //   setBoard(newBoard)
  }

  //this need to use id and call Hasura
  const addStory = id => {
    //   console.log(board, taskIndex)
    //   const newBoard = Object.assign([], board)
    //   newBoard[taskIndex].stories.push({ note: "" })
    //   setBoard(newBoard)
  }
  const classes = useStyles()

  return (
    <Layout>
      <Typography variant="h4" component="h4">
        {title}
      </Typography>
      {board && (
        <Box component="div" overflow="auto">
          <Table>
            <TableHead>
              <TableRow>
                {board.map(card => (
                  <TableCell className={classes.cell} key={card.id}>
                    <StickyNote
                      onClose={() => deleteTask(card.id)}
                      type="feature"
                      text={card.task}
                    />
                  </TableCell>
                ))}
                <TableCell
                  className={classes.root}
                  // onClick={() =>
                  //   setBoard(board.concat({ task: "", stories: [] }))
                  // }
                >
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <Cards
                  cards={board}
                  addStory={addStory}
                  deleteStory={deleteStory}
                />
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
    </Layout>
  )
}

export default Index