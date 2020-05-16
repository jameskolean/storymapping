import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles(theme => ({
  root: {
    height: 150,
    padding: theme.spacing(1),
  },
  cardHeader: {
    height: 15,
    padding: 0,
  },
  closeButton: {
    padding: 5,
    marginRight: -5,
    marginTop: -5,
  },
}))

export default function StickNote(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton className={classes.closeButton}>
            <CloseIcon onClick={props.onClose} />
          </IconButton>
        }
      />
      <TextField rowsMax={4} multiline fullWidth defaultValue={props.text} />
    </Card>
  )
}
