import {
  Box,
  Image,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { baseUrl, fetchApi } from "../pages/api/fetchApi";

function CompareProperties({ properties }) {
  const [comparisonProperties, setComparisonProperties] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setComparisonProperties(properties);
  }, [properties]);

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Obrazek</Th>
            <Th>Cena</Th>
            <Th>Liczba pokoi</Th>
            <Th>Liczba Łazienek</Th>
            <Th>Powierzchnia</Th>
            <Th>Tytuł</Th>
            <Th>
              {" "}
              <Button
                onClick={() => {
                  router.back();
                }}
              >
                Powrót
              </Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {properties.map((property) => (
            <Tr key={property.id}>
              <Td>
                <Box maxW="sm" overflow="hidden">
                  {
                    property.images.map((imageUrl, index) => (
                      <Image
                        key={index}
                        src={imageUrl.url}
                        alt={property.title}
                        borderRadius="lg"
                      />
                    ))[0]
                  }
                </Box>
              </Td>
              <Td>{property.price}</Td>
              <Td>{property.rooms}</Td>
              <Td>{property.bathrooms}</Td>
              <Td>{property.squareFootage}</Td>
              <Td>{property.title}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export async function getServerSideProps({ query }) {
  let selectedPropertyIds = query.selectedProperties;

  const comparisonProperties = [];
  for (const id of selectedPropertyIds) {
    const property = await fetchApi(`${baseUrl}api/v1/properties/${id}`);
    comparisonProperties.push(property);
  }

  return {
    props: {
      properties: comparisonProperties,
    },
  };
}

export default CompareProperties;
