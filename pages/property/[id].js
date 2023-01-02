import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { baseUrl, fetchApi } from "../api/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import millify from "millify";
const PropertyDetails = ({
  propertyDetails: {
    address,
    squareFootage,
    bedrooms,
    bathrooms,
    price,
    rooms,
    phoneNumbers,
    title,
    contactName,
    furnishingStatus,
    isVerified,
    category,
    details,
    images,
    location,
    nearestAmenities,
  },
}) => {
  const router = useRouter();
  let categoryName;

  switch (category) {
    case 1:
      categoryName = "apartments";
      break;
    case 2:
      categoryName = "houses";
      break;
    case 3:
      categoryName = "rooms";
      break;
    default:
      categoryName = category;
  }
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3">
            <Button
              onClick={() => {
                router.back();
              }}
            >
              Return
            </Button>
          </Box>
        </Flex>
      </Box>
      {images && <ImageScrollbar data={images} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            EUR {price}
          </Text>
          <Spacer />
          {/* <Avatar size="sm" src={agency?.logo?.url}></Avatar> */}
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms}
          <FaBed /> | {bathrooms} <FaBath /> | {millify(squareFootage)} sqft{" "}
          <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {details}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>category</Text>
          <Text fontWeight="bold">{categoryName}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {nearestAmenities.length && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilites:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {nearestAmenities?.map((amenity) => (
            <Text
              key={amenity.name}
              fontWeight="bold"
              color="blue.400"
              fontSize="l"
              p="2"
              bg="gray.200"
              m="1"
              borderRadius="5"
            >
              {amenity.name}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}api/v1/properties/${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
