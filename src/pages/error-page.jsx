import { useRouteError } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

import Layout from "./Root";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Layout>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >
        <Grid item xs={3}>
          <Typography variant="h1">Oops!</Typography>
          <Typography variant="p">Sorry, an unexpected error has occurred.</Typography>
          <br/>
          <Typography variant="p">
            <i>{error.statusText || error.message}</i>
          </Typography>
        </Grid>   
      </Grid> 
      </Layout>
    </div>
  );
}