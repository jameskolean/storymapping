import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../templates/Layout"
import BoardsContainer from "../components/boards-container"

const useStyles = makeStyles(theme => ({}))

const Index = () => {
  return (
    <Layout>
      <BoardsContainer />
    </Layout>
  )
}

export default Index
