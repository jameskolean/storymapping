import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import StickyNote from "../components/StickyNote"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import AddIcon from "@material-ui/icons/Add"
import IconButton from "@material-ui/core/IconButton"
import {
  Container,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@material-ui/core"

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

export default ({ data }) => {
  const title = data.allDataJson.edges[0].node.title
  const [board, setBoard] = useState(data.allDataJson.edges[0].node.board)

  console.log("New Board", board)

  const deleteTask = taskIndex => {
    console.log(board, taskIndex)
    const newBoard = Object.assign([], board)
    delete newBoard[taskIndex]
    setBoard(newBoard)
  }

  const deleteStory = (taskIndex, storyIndex) => {
    console.log(board, taskIndex, storyIndex)
    const newBoard = Object.assign([], board)
    delete newBoard[taskIndex].stories[storyIndex]
    setBoard(newBoard)
  }

  const addStory = taskIndex => {
    console.log(board, taskIndex)
    const newBoard = Object.assign([], board)
    newBoard[taskIndex].stories.push({ note: "" })
    setBoard(newBoard)
  }
  const classes = useStyles()

  return (
    <Container maxWidth>
      <Typography variant="h4" component="h4">
        <TextField
          fullWidth
          id="title"
          defaultValue={title}
          className={classes.title}
        />
      </Typography>

      <Box component="div" overflow="auto">
        <Table>
          <TableHead>
            <TableRow>
              {board.map(({ task }, taskIndex) => (
                <TableCell className={classes.cell} key={taskIndex}>
                  <StickyNote
                    onClose={() => deleteTask(taskIndex)}
                    type="feature"
                    text={task}
                  />
                </TableCell>
              ))}
              <TableCell
                className={classes.root}
                onClick={() =>
                  setBoard(board.concat({ task: "", stories: [] }))
                }
              >
                <IconButton>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {board.map(({ stories }, taskIndex) => (
                <TableCell key={taskIndex} className={classes.veriticalList}>
                  <Table>
                    <TableBody>
                      {stories.map((story, storyIndex) => (
                        <TableRow key={storyIndex}>
                          <TableCell className={classes.cell}>
                            <StickyNote
                              text={story.note}
                              onClose={() => deleteStory(taskIndex, storyIndex)}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell
                          className={classes.root}
                          onClick={() => addStory(taskIndex)}
                        >
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  )
}

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          title
          board {
            task
            stories {
              note
            }
          }
        }
      }
    }
  }
`
