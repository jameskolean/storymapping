import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Grid from "@material-ui/core/Grid"
import { Button, Typography } from "@material-ui/core"
import AddBox from "@material-ui/icons/AddBox"
import Paper from "@material-ui/core/Paper"
import TaskCard from "./task-card"
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
}))

const BOARD_APOLLO_QUERY = gql`
  query fetchBoard($id: uuid) {
    board(where: { id: { _eq: $id } }) {
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

const Board = ({ data }) => {
  const classes = useStyles()

  const { title, id } = data
  const { loading, error, data: apolloData } = useQuery(BOARD_APOLLO_QUERY, {
    variables: { id },
  })
  return (
    <Paper className={classes.paper}>
      <div className={classes.boardHeader}>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button color="primary" onClick={() => alert("hello")}>
              New Task
            </Button>
          </Grid>
        </Grid>
      </div>
      {loading && <p>Loading Board...</p>}
      {error && <p>Error: ${error.message}</p>}
      {apolloData &&
        apolloData.board[0].cards.map(card => <TaskCard data={card} />)}
    </Paper>
  )
}
export default Board
