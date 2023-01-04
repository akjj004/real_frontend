import { useState } from "react";
import { useRouter } from "next/router";
import { baseUrl, fetchApi } from "../pages/api/fetchApi";
import Property from "../components/Property";
import {
  Flex as Grid,
  Box,
  Text,
  Icon,
  SimpleGrid,
  Center,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import SearchFilters from "../components/SearchFilters";
const Home = ({ properties }) => {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState([]);

  return (
    <>
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
          <Text>Wyszukaj nieruchomości po filtrach</Text>
          <Icon paddingleft="2" w="7" as={BsFilter} />
        </Grid>
        {searchFilters && <SearchFilters />}

        <Center mt={4} px={3}>
          <SimpleGrid columns={[1, 2, 3]} spacing="50px" rowGap={9}>
            {properties.map((property) => (
              <>
                <Card maxW="sm">
                  <CardBody>
                    <IconButton
                      aria-label="Compare Button"
                      icon={<MdCompareArrows />}
                      onClick={() => {
                        if (selectedProperties.includes(property)) {
                          setSelectedProperties(
                            selectedProperties.filter((p) => p !== property)
                          );
                        } else {
                          setSelectedProperties([
                            ...selectedProperties,
                            property,
                          ]);
                        }
                      }}
                      style={{ position: "absolute", top: 0, right: 0 }}
                    />
                  </CardBody>
                  <Property
                    key={property.id}
                    property={property}
                    style={{ position: "relative" }}
                  ></Property>
                </Card>
              </>
            ))}
          </SimpleGrid>
        </Center>
      </Box>

      <Box pt={10} mx={2}>
        <Text mb={4} fontSize="lg">
          Wybrane nieruchomości:
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing="50px" rowGap={9}>
          {selectedProperties.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </SimpleGrid>
        <Button
          mt={4}
          onClick={() => {
            router.push({
              pathname: "/compare",
              query: {
                selectedProperties: selectedProperties.map((p) => p.id),
              },
            });
          }}
        >
          Porównaj nieruchomości
        </Button>
      </Box>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const category = query.category || 1;
  const findByRooms = query.rooms || 0;
  const location = query.location || 1;
  const minPrice = query.minPrice || 0;
  const maxPrice = query.maxPrice || 0;
  const minSquareFootage = query.minSquareFootage || 0;
  const maxSquareFootage = query.maxSquareFootage || 0;
  const listProperties = await fetchApi(
    // `${baseUrl}properties?page=0&size=20&sort=string&category=${category}`
    // properties?page=0&size=20&sort=asc
    // `${baseUrl}properties/search/findByLocation?location=${location}&findByCategory?category=${category}&findByRooms?rooms=${findByRooms}`
    `${baseUrl}api/v1/properties/findBy?rooms=${findByRooms}&location=${location}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minSquareFootage=${minSquareFootage}&maxSquareFootage=${maxSquareFootage}`
  );

  return {
    props: {
      properties: listProperties,
    },
  };
}

export default Home;
