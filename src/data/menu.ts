export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuGroup {
  id: string;
  name: string;
  description?: string;
  price?: string; // Group price (for pizza groups, salads, etc.)
  items: MenuItem[];
}

export const menuGroups: MenuGroup[] = [
  {
    id: "btnScroll",
    name: "Grupp 1",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "119kr",
    items: [
      { name: "Margherita" },
      { name: "Vesuvio", description: "Skinka" },
      { name: "Romana", description: "Bacon, lök" },
      { name: "Bolognese", description: "Köttfärs" },
      { name: "Altonno", description: "Tonfisk" },
      { name: "Funghi", description: "Champinjoner" },
      { name: "Capricciosa", description: "Skinka, champinjoner" },
      { name: "Pescatore", description: "Skinka, tonfisk" },
      { name: "Calzone", description: "Skinka(inbakad)" },
      {
        name: "Vegetariano",
        description: "Champinjoner, paprika, oliver, lök",
      },
      { name: "La bella", description: "Tonfisk, räkor" },
      { name: "Teodora", description: "Räkor, champinjoner" },
      { name: "Bussola", description: "Skinka, räkor" },
      { name: "Hawaii", description: "Skinka, ananas" },
    ],
  },
  {
    id: "G2",
    name: "Grupp 2",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "129kr",
    items: [
      { name: "Pazza", description: "Skinka, champinjoner, lök" },
      { name: "Marinara", description: "Räkor, musslor" },
      { name: "Salerno", description: "Skinka, tonfisk, räkor" },
      { name: "Banana", description: "Skinka, banan, currykrydda" },
      { name: "Angela", description: "Skinka, räkor, champinjoner, ananas" },
      { name: "Tomaso", description: "Skinka, räkor, champinjoner" },
      {
        name: "Quattro Stagione",
        description: "Skinka, musslor, räkor, champinjoner, oliver",
      },
      { name: "Jaris", description: "Skinka, räkor, ananas" },
      { name: "Pugliesé", description: "Bacon, lök, ägg" },
      { name: "Hot-hot", description: "Cayennepeppar, köttfärs, tomat, lök" },
      { name: "Orient", description: "Salami, lök, champinjoner" },
      { name: "Armenia", description: "Salami, köttfärs, paprika, lök" },
    ],
  },
  {
    id: "G3",
    name: "Grupp 3",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "139kr",
    items: [
      { name: "Inter", description: "Salami, salladsost, soltorkade tomater" },
      { name: "Napoli", description: "Skinka, tonfisk, räkor, champinjoner" },
      {
        name: "Peperonipizzza",
        description: "Pepperonikorv, lök, grön paprika",
      },
      {
        name: "Kebabpizza",
        description: "Nötkött, lök, champinjoner, stark sås",
      },
      {
        name: "Indiana",
        description: "Kyckling, purjolök, champinjoner, paprika, currysås",
      },
      { name: "Kycklingpizza", description: "Kyckling, banan, currysås" },
      {
        name: "Tacopizza",
        description: "Tacofärs, lök, tomat, jalapeño, vitlökssås",
      },
      {
        name: "Vegetariano Special",
        description: "Gorgonzola, tomat, paprika, champinjoner, purjolök",
      },
      {
        name: "Vesuvio special",
        description: "Lufttorkad skinka, mozzarella, ruccola",
      },
      {
        name: "Mexicana",
        description: "Skinka, köttfärs, paprika, jalapeño, tabasco",
      },
      {
        name: "Siemens Special",
        description: "Salami, skinka, champinjoner, bearnaisesås",
      },
    ],
  },
  {
    id: "G4",
    name: "Grupp 4",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "149kr",
    items: [
      { name: "Gyrospizza", description: "Gyros, lök, champinjoner, mild sås" },
      {
        name: "Kycklingkebabpizza",
        description: "Kycklingkebab, lök, champinjoner, mild sås",
      },
      {
        name: "Afrikana",
        description: "Kyckling, skinka, räkor, banan, currysås",
      },
      {
        name: "Fläskfilé Special",
        description: "Fläskfilé, tomat, purjolök, färsk vitlök, bearnaisesås",
      },
      {
        name: "Ciao Ciao",
        description: "Fläskfilé, champinjoner, färsk vitlök, bearnaisesås",
      },
      {
        name: "Gorgonzola",
        description: "Fläskfilé, gorgonzola, skinka, purjolök, paprika",
      },
      {
        name: "Lasse Special",
        description:
          "Skinka, champinjoner, räkor, ananas, bacon, köttfärs, bearnaisesås",
      },
      {
        name: "Americana",
        description: "Fläskfilé, räkor, bacon, champinjoner, färsk vitlök",
      },
    ],
  },
  {
    id: "G5",
    name: "Grupp 5",
    description: "Tomatsås & ost ingår i alla pizzor",
    price: "159kr",
    items: [
      {
        name: "Black & White",
        description: "Oxfilé, fläskfilé, champinjoner, bearnaisesås",
      },
      {
        name: "Peppe Special",
        description: "Pepperonikorv, salami, oliver, rå rödlök, ruccola",
      },
      {
        name: "Husets Special",
        description: "Oxfilé, champinjoner, bearnaisesås",
      },
      {
        name: "Pugliesé Special",
        description: "Bacon, lök, 2st ägg, pepperonikorv, salami",
      },
      {
        name: "Kebabpizza Special",
        description:
          "Nötkött, isbergssallad, tomat, gurka, rödlök, feferoni, vitlökssås",
      },
      {
        name: "Capricciosa Special",
        description: "Lufttorkad skinka, champinjoner, mozzarella, ruccola",
      },
      {
        name: "Samira",
        description:
          "Oxfilé, champinjoner, lök, färsk vitlök, mozzarella, bearnaisesås, ruccola",
      },
      {
        name: "Bari",
        description: "Fläskfilé, lök, gorgonzola, soltorkade tomater, ruccola",
      },
      {
        name: "Tutto Bello",
        description: "Oxfilé, skinka, gorgonzola, purjolök, körsbärstomater",
      },
      {
        name: "Halloumi",
        description:
          "Lufttorkad skinka, halloumi, körsbärstomater, rödlök, mozzarella, oliver, ruccola",
      },
      {
        name: "Jerevan",
        description:
          "Mozzarella, salami, halloumi, rödlök, körsbärstomater, ruccola",
      },
    ],
  },
  {
    id: "kebab",
    name: "Kebab / Kyckling / Gyros / Falafel",
    items: [
      {
        name: "Kebab med bröd",
        description: "Nötkött, sallad, rödlök, tomat, feferoni, stark sås",
        price: "125kr",
      },
      {
        name: "Kebabtallrik / Rulle",
        description: "Nötkött, sallad, rödlök, feferoni, stark sås",
        price: "125kr",
      },
      {
        name: "Hawaiitallrik / Rulle / Bröd",
        description:
          "Nötkött, sallad, rödlök, tomat, ananas, feferoni, bearnaisesås",
        price: "135kr",
      },
      {
        name: "Grekisktallrik / Rulle / Bröd",
        description:
          "Nötkött, sallad, rödlök, feferoni, salladsost, tomat, vitlökssås",
        price: "135kr",
      },
      {
        name: "Iskanderrulle",
        description:
          "Nötkött, sallad, rödlök, feferoni, inlagd gurka, tomat, vitlökssås",
        price: "135kr",
      },
      {
        name: "Kycklingrulle / Bröd",
        description:
          "Kyckling, sallad, rödlök, tomat, ananas, feferoni, currysås",
        price: "135kr",
      },
      {
        name: "Kycklingkebabtallrik / Rulle",
        description: "Kycklingkebab, sallad, rödlök, feferoni, mild sås",
        price: "135kr",
      },
      {
        name: "Kycklingkebab med bröd",
        description: "Kycklingkebab, sallad, rödlök, tomat, feferoni, mild sås",
        price: "135kr",
      },
      {
        name: "Gyrostallrik / Rulle / Bröd",
        description: "Gyroskött, sallad, rödlök, feferoni, mild sås",
        price: "135kr",
      },
      {
        name: "Falafeltallrik / Rulle / Bröd",
        description: "Falafel, sallad, rödlök, feferoni, tomat, mild sås",
        price: "120kr",
      },
    ],
  },
  {
    id: "LAC",
    name: "À La Carte",
    items: [
      {
        name: "Lövstek",
        description: "Stekpotatis/pommes & aromsmör",
        price: "139kr",
      },
      {
        name: "Schnitzel",
        description: "Stekpotatis/pommes & aromsmör",
        price: "139kr",
      },
      {
        name: "Pannbiff",
        description: "Stekpotatis, brunsås & lingonsylt",
        price: "139kr",
      },
      {
        name: "Rödspätta",
        description: "Stekpotatis/pommes & remouladsås",
        price: "139kr",
      },
      {
        name: "Kycklingfilé",
        description: "Pommes/klyftpotatis/ris & bearnaisesås",
        price: "139kr",
      },
      {
        name: "Fläskfilé",
        description: "Pommes/klyftpotatis/ris & bearnaisesås",
        price: "149kr",
      },
      {
        name: "Kycklingspett",
        description: "Pommes/klyftpotatis/ris & tzatziki",
        price: "139kr",
      },
      {
        name: "Pyttipanna",
        description: "Stekt ägg & rödbetor",
        price: "139kr",
      },
      {
        name: "Raggmunk",
        description: "Stekt fläsk & lingonsylt (Hemlagad)",
        price: "139kr",
      },
      { name: "Lasagne", description: "Hemlagad", price: "149kr" },
      { name: "Spaghetti Bolognese", price: "139kr" },
      { name: "Hamburgertallrik 90g", price: "110kr" },
      { name: "Hamburgertallrik 150g", price: "120kr" },
      {
        name: "Paella kyckling",
        description: "Ris, kyckling, majs, lök, paprika, champinjoner",
        price: "139kr",
      },
      {
        name: "Paella kebab",
        description: "Ris, nötkött, majs, lök, paprika, champinjoner",
        price: "139kr",
      },
      {
        name: "Paella mix",
        description: "Ris, räkor, kyckling, majs, lök, paprika, champinjoner",
        price: "139kr",
      },
    ],
  },
  {
    id: "sallader",
    name: "Sallader",
    description:
      "Isbergssallad, tomat & gurka samt valfri dressing ingår till samtliga sallader",
    price: "125kr",
    items: [
      { name: "Ost & skinksallad", description: "Ost, skinka, ananas, majs" },
      {
        name: "Tonfisksallad",
        description: "Tonfisk, citron, ägg, rödlök, oliver, majs",
      },
      {
        name: "Räksallad",
        description: "Räkor, paprika, ägg, oliver, citron, majs",
      },
      {
        name: "Grekisksallad",
        description: "Salladsost, rödlök, oliver, paprika",
      },
      {
        name: "Kycklingsallad",
        description: "Kyckling, rödlök, ananas, paprika, majs, ris",
      },
      { name: "Kebabsallad", description: "Nötkött, rödlök, feferoni" },
      {
        name: "Kycklingkebabsallad",
        description: "Kycklingkebab, rödlök, feferoni",
        price: "+9kr",
      },
      {
        name: "Gyrossallad",
        description: "Gyroskött, rödlök, feferoni",
        price: "+9kr",
      },
    ],
  },
  {
    id: "sallader-special",
    name: "Sallader special",
    items: [
      {
        name: "Kyckling special",
        description:
          "Kycklingspett, soltorkade tomater, rödlök, salladsost, avokado",
        price: "139kr",
      },
      {
        name: "Naddas special",
        description:
          "Kycklingfilé, soltorkade tomater, rödlök, salladsost, avokado, oliver",
        price: "139kr",
      },
    ],
  },
  {
    id: "barnmeny",
    name: "Barnmeny",
    description: "Ingår tetra dryck",
    price: "92kr",
    items: [
      { name: "Pizzagrupp 1" },
      { name: "Hamburgertallrik 90g" },
      { name: "Kebabtallrik" },
      { name: "Köttbullar med lingon & mos" },
      { name: "Nuggets med pommes" },
    ],
  },
];
