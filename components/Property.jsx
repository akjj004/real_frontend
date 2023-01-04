import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/layout";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import { FaBed, FaBath } from "react-icons/fa";

const Property = ({ property, button }) => {
  const { images, price, rooms, bathrooms, squareFootage, title, id } =
    property;

  return (
    <Link href={`/property/${id}`} passHref>
      <Card maxW="sm">
        <CardBody>
          {
            images.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl.url}
                alt={title}
                borderRadius="lg"
              />
            ))[0]
          }
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{/* Add a description of the property here */}</Text>
            <Text color="blue.600" fontSize="2xl">
              PLN {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {bathrooms} <FaBath /> |{" "}
            {millify(squareFootage, { units: ["m²"] })} m² <BsGridFill />
          </Flex>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Property;
