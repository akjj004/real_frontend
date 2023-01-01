import { useEffect, useState } from "react";
import { Flex, Select, Checkbox, Box, Stack, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../pages/api/fetchApi";
import { Button } from "@chakra-ui/react";

export default function SearchFilters() {
  const [filterValues, setFilterValues] = useState({});
  const [filters] = useState(filterData);

  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <Flex
      bg="blue.300"
      p="4"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <Stack isInline spacing={4}>
        {filters?.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              onChange={(e) => {
                const newFilterValues = {
                  ...filterValues,
                  [filter.queryName]: e.target.value,
                };
                setFilterValues(newFilterValues);
              }}
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
        <Box pt={2}>
          <Button onClick={() => searchProperties(filterValues)}>Search</Button>
        </Box>
      </Stack>
    </Flex>
  );
}
