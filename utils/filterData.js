export const filterData = [
  {
    items: [
      { name: "apartment", value: "Apartment" },
      { name: "house", value: "House" },
      { name: "room", value: "Room" },
    ],
    placeholder: "Categories",
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
    placeholder: "Rooms",
    queryName: "rooms",
  },
  {
    items: [
      { name: "warsaw", value: "Warsaw" },
      { name: "krakow", value: "Krakow" },
      { name: "poznan", value: "Poznan" },
      { name: "wroclaw", value: "Wroclaw" },
    ],
    placeholder: "Location",
    queryName: "location",
  },
  {
    items: [
      { name: "0-1000", value: "0 - 1,000" },
      { name: "1000-3000", value: "1,000 - 3,000" },
      { name: "3000-5000", value: "3,000 - 5,000" },
      { name: "5000-10000", value: "5,000 - 10,000" },
      { name: "10000-20000", value: "10,000 - 20,000" },
      { name: "20000+", value: "20,000+" },
    ],
    placeholder: "Price Range",
    queryName: "priceRange",
  },
];

export const getFilterValues = (filterValues) => {
  const { category, rooms, location, priceRange } = filterValues;
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
  ];
  return values;
};
