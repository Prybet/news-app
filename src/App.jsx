import { Container, Grid, Typography } from "@mui/material"
import Form from "./components/Form"
import NewsList from "./components/NewsList"
import { NewsProvider } from "./context/NewsProvider"


function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h1">
            Buscador de Noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>

        <NewsList />

      </Container>
    </NewsProvider >
  )
}

export default App
