export const filterData = [
  {
    items: [
      { name: "apartment", value: "1" },
      { name: "house", value: "2" },
      { name: "room", value: "3" },
    ],
    placeholder: "Typ",
    queryName: "category",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Pokoje",
    queryName: "rooms",
  },
  {
    items: [
      { name: "warsaw", value: "1" },
      { name: "krakow", value: "2" },
      { name: "poznan", value: "3" },
      { name: "wroclaw", value: "4" },
    ],
    placeholder: "Lokalizacja",
    queryName: "location",
  },
  {
    items: [
      { name: "0", value: "0" },
      { name: "1000", value: "1000" },
      { name: "3000", value: "3000" },
      { name: "5000", value: "5000" },
      { name: "10000", value: "10000" },
      { name: "20000", value: "20000" },
      { name: "30000", value: "30000" },
      { name: "40000", value: "40000" },
      { name: "50000", value: "50000" },
      { name: "60000", value: "60000" },
      { name: "70000", value: "70000" },
      { name: "80000", value: "80000" },
      { name: "90000", value: "90000" },
      { name: "100000", value: "100000" },
    ],
    placeholder: "Cena minimalna",
    queryName: "minPrice",
  },
  {
    items: [
      { name: "0", value: "0" },
      { name: "1000", value: "1000" },
      { name: "3000", value: "3000" },
      { name: "5000", value: "5000" },
      { name: "10000", value: "10000" },
      { name: "20000", value: "20000" },
      { name: "30000", value: "30000" },
      { name: "40000", value: "40000" },
      { name: "50000", value: "50000" },
      { name: "60000", value: "60000" },
      { name: "70000", value: "70000" },
      { name: "80000", value: "80000" },
      { name: "90000", value: "90000" },
      { name: "100000", value: "100000" },
    ],
    placeholder: "Cena maksymalna m²",
    queryName: "maxPrice",
  },
  {
    items: [
      { name: "0", value: "0" },
      { name: "500", value: "500" },
      { name: "1000", value: "1000" },
      { name: "1500", value: "1500" },
      { name: "2000", value: "2000" },
      { name: "2500", value: "2500" },
      { name: "3000", value: "3000" },
      { name: "3500", value: "3500" },
      { name: "4000", value: "4000" },
      { name: "4500", value: "4500" },
      { name: "5000", value: "5000" },
    ],
    placeholder: "Powierzchnia od",
    queryName: "minSquareFootage",
  },
  {
    items: [
      { name: "0", value: "0" },
      { name: "500", value: "500" },
      { name: "1000", value: "1000" },
      { name: "1500", value: "1500" },
      { name: "2000", value: "2000" },
      { name: "2500", value: "2500" },
      { name: "3000", value: "3000" },
      { name: "3500", value: "3500" },
      { name: "4000", value: "4000" },
      { name: "4500", value: "4500" },
      { name: "5000", value: "5000" },
    ],
    placeholder: "Powierzchnia do m²",
    queryName: "maxSquareFootage",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    category,
    rooms,
    location,
    priceRange,
    minPrice,
    maxPrice,
    minSquareFootage,
    maxSquareFootage,
  } = filterValues;
  const values = [
    {
      name: "category",
      value: category,
    },
    {
      name: "rooms",
      value: rooms,
    },
    {
      name: "location",
      value: location,
    },
    {
      name: "priceRange",
      value: priceRange,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "minSquareFootage",
      value: minSquareFootage,
    },
    {
      name: "maxSquareFootage",
      value: maxSquareFootage,
    },
  ];
  return values;
};
