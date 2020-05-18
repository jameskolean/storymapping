import React from "react"
import Layout from "../templates/Layout"
import { Grid, Typography } from "@material-ui/core"

const StoryBoard = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h1">Build user story maps with ease.</Typography>
        </Grid>
        <Grid item xs={8}>
          {/* Image? */}
        </Grid>

        <Grid item xs={8}>
          {/* Image? */}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3">Visualize your journey</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h3">Prioritize releases</Typography>
        </Grid>
        <Grid item xs={8}>
          {/* Image */}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default StoryBoard
