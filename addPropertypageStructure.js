const structure = {
  sections: [
    {
      title: "Property Overview",
      subSections: [
        {
          title: "For",
          fieldsType: "radio",
          dependencies: [],
          name: "purpose",
          fields: [
            {
              id: "rent",
              value: "rent",
              label: "Rent",
              dependencies: [],
            },
            {
              value: "sale",
              id: "sale",
              label: "Sale",
              dependencies: [],
            },
          ],
        },
        {
          title: "Property Category ",
          fieldsType: "btn-radio",
          name: "property_category",
          fields: [
            {
              value: "land",
              id: "1",
              label: "Land",
            },
            {
              value: "flats",
              id: "2",
              label: "Flats",
            },
            {
              value: "office_space",
              id: "3",
              label: "Office Space",
            },
            {
              value: "shop_space",
              id: "5",
              label: "Shop Space",
            },
            {
              value: "house",
              id: "6",
              label: "House",
            },
          ],
          dependencies: { purpose: ["rent", "sale"] },
        },
        {
          label: "Land Type",
          placeHolder: "Select Land Type",
          fieldsType: "select",
          name: "land_type",
          options: [
            { name: "agricultural" },
            { name: "commercial" },
            { name: "others" },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["land"],
          },
        },
        {
          label: "Flat Type",
          placeHolder: "Select Flat Type",
          fieldsType: "select",
          name: "flat_type",
          options: [
            { label: "1bhk", value: "1bhk" },
            { label: "2bhk", value: "2bhk" },
            { label: "3bhk", value: "3bhk" },
            { label: "4bhk", value: "4bhk" },
          ],
          dependencies: [{ purpose: "rent", property_category: ["flats"] }],
        },
        {
          label: "Office Space Type",
          placeHolder: "Select Office Space Type",

          fieldsType: "select",
          name: "office_space_type",
          options: [
            { label: "2bhk", value: "2bhk" },
            { label: "3bhk", value: "3bhk" },
            { label: "4bhk", value: "4bhk" },
            { label: "coworking", value: "coworking" },
            { label: "Open Space", value: "open_space" },
            { label: "others", value: "others" },
          ],
          dependencies: {
            purpose: ["sale", "rent"],
            property_category: ["office_space"],
          },
        },
        {
          label: "Shop Space Type",
          placeHolder: "Select Shop Space Type",

          fieldsType: "select",
          name: "shop_space_type",
          options: [
            { label: "Resturant", value: "resturant" },
            { label: "Cafe", value: "cafe" },
            { label: "grocery", value: "grocery" },
            { label: "Gift Shop", value: "gift_shop" },
            { label: "Stationery", value: "stationery" },
            { label: "Fancy", value: "fancy" },
            { label: "Cosmetic", value: "cosmetic" },
            { label: "others", value: "others" },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["shop_space"],
          },
        },
        {
          label: "House Type",
          placeHolder: "Select House Type",

          fieldsType: "select",
          name: "house_type",
          options: [
            { label: "others", value: "others" },
            {
              label: "bunglow",
              value: "bunglow",
            },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["house"],
          },
        },
        {
          label: "Apartment",
          placeHolder: "Select Apartment Type",

          fieldsType: "select",
          name: "apartment_type",
          options: [
            { label: "others", value: "others" },
            {
              label: "2bhk",
              value: "2bhk",
            },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["apartment"],
          },
        },
        {
          label: "Availability",
          fieldsType: "btn-radio",
          name: "availability",
          fields: [
            { label: "Available", id: "available", value: "available" },
            {
              label: "Available Soon",
              id: "available_soon",
              value: "available_soon",
            },
          ],
          dependencies: {
            purpose: ["rent"],
            property_category: [
              "flats",
              "office_space",
              "shop_space",
              "house",
              "apartment",
            ],
          },
        },
        {
          label: "Ownership",
          fieldsType: "btn-radio",
          name: "ownership",
          fields: [
            {
              label: "Instituional",
              id: "institutional",
              value: "institutional",
            },
            {
              label: "instituional",
              id: "individual",
              value: "individual",
            },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["house"],
          },
        },
        {
          label: "Build Date(YYYY-MM)",
          fieldsType: "date",
          name: "build_date",

          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["house", "apartment"],
          },
        },
      ],
    },
    {
      title: "Property Location",
      subSections: [
        {
          fieldsType: "btn-radio",
          name: "province",
          fields: [
            { id: "state1", label: "State1", value: "state1" },
            {
              id: "district2",
              label: "Madhesh Province",
              value: "madhesh_province",
            },
          ],
        },
        {
          fieldsType: "select",
          name: "district",
          fields: [
            { id: "district1", label: "district1", value: "district1" },
            {
              id: "district2",
              label: "Madhesh Province",
              value: "district2",
            },
          ],
        },
      ],
    },
  ],
};
