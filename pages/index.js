import Head from "next/head";
import { Grommet, Grid, Box, Clock } from "grommet";

//import Grommet and its components for each page that requires them. Typically, you should include Grommet only once as one of your top-level nodes.

// add an initial theme declaration for Grommet
const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

function Home() {
  //replace the main div with Grommet
  return (
    <Grommet theme={theme}>
      <Head>
        <title>Grommet.io with NextJS Boilerplate.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <header className="App-header">
        <p>Grommet.io with NextJS Boilerplate.</p>
        <Clock type="digital" />
      </header>
      <Grid
        columns={["auto", "auto"]}
        rows={["1fr", "1fr"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box
          gridArea="header"
          background="brand"
          justify="center"
          align="center"
        >
          Grommet Grid Header
        </Box>
        <Box
          gridArea="nav"
          background="light-5"
          justify="center"
          align="center"
        >
          child
        </Box>
        <Box
          gridArea="main"
          background="light-2"
          justify="center"
          align="center"
        >
          child
        </Box>
      </Grid>
    </Grommet>
  );
}

export default Home;
