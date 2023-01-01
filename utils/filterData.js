export const filterData = [
  {
    items: [
      {
        name: "Apartment",
        value: "Apartment",
      },
      {
        name: "House",
        value: "House",
      },
      {
        name: "Land",
        value: "Land",
      },
      {
        name: "Condo",
        value: "Condo",
      },
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
];

export const getFilterValues = (filterValues) => {
  const { category, rooms } = filterValues;
  const values = [
    {
      name: "category",
      value: category,
    },
    {
      name: "rooms",
      value: rooms,
    },
  ];
  return values;
};
