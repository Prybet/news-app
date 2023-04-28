import { Grid, Pagination, Stack, Typography } from "@mui/material";
import useNews from "../hooks/useNews";
import News from "./News";

const NewsList = () => {
    const { news, totalNews, handleChangePage, page } = useNews();

    const pages = Math.ceil(totalNews / 20);
    return (
        <>
            <Typography
                textAlign={"center"}
                marginY={5}
                variant="h3"
                component={"h2"}
            >
                Ultimas Noticias
            </Typography>
            <Typography
                textAlign={"center"}
                marginY={2}
                color={"error"}
            >
                *Some images are not available in certain countries || Algunas imagenes no estan disponibles en ciertos países
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {news.map(article => (
                    <News key={article.url} news={article} />
                ))}
            </Grid>

            <Stack
                spacing={2}
                direction="row"
                justifyContent={"center"}
                alignItems="center"
                sx={{
                    marginY: 5
                }}
            >
                <Pagination
                    count={pages}
                    variant="outlined"
                    color="secondary"
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    )

}

export default NewsList;