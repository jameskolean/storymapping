import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"

const Layout = props => {
  return (
    <Container maxWidth="xl">
      <Toolbar>
        <IconButton>
          <Link to={`/`}>
            <Avatar alt="Home" src="/..." />
          </Link>
        </IconButton>

        <Typography variant="h6">
          <Link to={`story-board`}>Story Board</Link>
        </Typography>
      </Toolbar>
      {props.children}
    </Container>
  )
}
export default Layout
