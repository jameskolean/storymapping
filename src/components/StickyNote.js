import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles(theme => ({
  feature: {
    height: 111,
    padding: theme.spacing(1),
    backgroundColor: "azure",
  },
  story: {
    height: 111,
    padding: theme.spacing(1),
    backgroundColor: "linen",
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
  const [isRaised, setRaised] = useState(false)
  const classes = useStyles()
  const cardClass = props.type === "feature" ? classes.feature : classes.story

  return (
    <Card className={cardClass} raised={isRaised}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton className={classes.closeButton} onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        }
      />
      <TextField
        onFocus={() => setRaised(true)}
        onBlur={() => setRaised(false)}
        rows={4}
        multiline
        fullWidth
        defaultValue={props.text}
        InputProps={{ disableUnderline: true }}
      />
    </Card>
  )
}
