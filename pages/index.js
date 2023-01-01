import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { baseUrl, fetchApi } from "../pages/api/fetchApi";
import Property from "../components/Property";
import {
  Flex as Grid,
  Box,
  Text,
  Icon,
  Divider,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
const Home = ({ properties }) => {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);

  return (
    <Box>
      <Grid
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="blue.400"
        borderBottom="1px"
        borderColor="blue.400"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Products by filters</Text>
        <Icon paddingleft="2" w="7" as={BsFilter} />
      </Grid>
      {searchFilters && <SearchFilters />}

      <Center mt={4} px={3}>
        <SimpleGrid columns={[1, 2, 3]} spacing="50px" rowGap={9}>
          {properties._embedded.properties.map((property) => (
            <Property key={property._links.self.href} property={property} /> // Render a Property component for each property
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const category = query.category || "1";
  const findByRooms = query.rooms || "0";
  const listProperties = await fetchApi(
    // `${baseUrl}properties?page=0&size=20&sort=string&category=${category}`
    // properties?page=0&size=20&sort=asc
    `${baseUrl}properties/search/findByCategory?category=${category}&findByRooms?rooms=${findByRooms}`
  );

  return {
    props: {
      properties: listProperties,
    },
  };
}

export default Home;
