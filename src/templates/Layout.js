import React, { Fragment } from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Layout = props => {
  const isLoggedIn = isAuthenticated()
  const user = getProfile()
  console.log(user)

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

        {!isLoggedIn && <Button onClick={login}>Login</Button>}
        {isLoggedIn && (
          <Fragment>
            <Button onClick={logout}>Logout</Button>
            <Avatar alt={user.given_name} src={user.picture} />
          </Fragment>
        )}
      </Toolbar>
      {props.children}
    </Container>
  )
}
export default Layout
