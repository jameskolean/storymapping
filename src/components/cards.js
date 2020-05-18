import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import StickyNote from "../components/sticky-note"
import AddIcon from "@material-ui/icons/Add"
import IconButton from "@material-ui/core/IconButton"
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
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

const Cards = ({ cards, addStory, deleteStory }) => {
  const classes = useStyles()
  if (!cards) return <h4>No Cards</h4>
  return (
    <>
      {cards.map(card => (
        <TableCell key={card.id} className={classes.veriticalList}>
          <Table>
            <TableBody>
              {card.stories.map(story => (
                <TableRow key={story.id}>
                  <TableCell className={classes.cell}>
                    <StickyNote
                      text={story.note}
                      onClose={() => deleteStory(card.id, story.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  className={classes.root}
                  onClick={() => addStory(card.id)}
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
    </>
  )
}
export default Cards
