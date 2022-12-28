import { baseUrl, fetchApi } from "../pages/api/fetchApi";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const Home = ({ properties }) => {
  console.log(properties);
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Our Real Estate App!
      </Typography>
      <Grid container spacing={4}>
        {properties._embedded.properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card>
              <CardMedia
                component="img"
                alt={property.title}
                height="140"
                image={property.images[0]}
                title={property.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {property.address.street}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {property.squareFootage} sq ft | {property.bedrooms} bed |{" "}
                  {property.bathrooms} bath
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="flex-end" p={1}>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export async function getServerSideProps() {
  const listProperties = await fetchApi(`${baseUrl}properties?page=0&size=20`);

  return {
    props: {
      properties: listProperties,
    },
  };
}

export default Home;
