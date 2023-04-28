import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";


const News = ({ news }) => {

    const { urlToImage, url, title, description, source } = news;
    return (
        <Grid item md={6} lg={4}>
            <Card>

                <CardMedia
                    component={"img"}
                    alt={`News ${title} Image`}
                    image={urlToImage}
                    height={"250"}
                    sx={{ minHeight: 250 }}
                />

                <CardContent
                    sx={{
                        minHeight: 250
                    }}>
                    <Typography variant="body1" color={"error"}>
                        {source.name}
                    </Typography>
                    <Typography variant="h5" component={"div"}>
                        {title}
                    </Typography>
                    <Typography variant="body2" component={"div"}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width={"100%"}
                        textAlign="center"
                        sx={{ textDecoration: "none" }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default News;