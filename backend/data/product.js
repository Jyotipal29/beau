const products = [
  {
    title: "Rose Printed Co-Ord Set",
    description:
      "Yellow and pink rose print with off white primary background colour",
    mainImageUrl:
      "https://drive.google.com/uc?id=10v2BkF4MlR6LEiX1NLUOEzlj4---VvOC",
    extraImages: [
      "https://drive.google.com/uc?id=1edWGQwcexg-MtD7txar2VTNuHmDO_hTN",
      "https://drive.google.com/uc?id=1iqa_9-r8M6VIWLLBIqAHS4av_rEdl5tT",
      "https://drive.google.com/uc?id=1drLAODwAHzeoM-2cqJqTdUAxFd4L85YN",
      "https://drive.google.com/uc?id=1BVuH0qSWCDvs_S2vb7ovraCnwUnwc7XR",
      "https://drive.google.com/uc?id=1zgeM7oJdIqa4u6VwSyCugzPu1nwcohI3",
    ],
    price: 1499,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "yellow",
    material: "Double georgette",
  },

  {
    title: "Multicolour Two Tier dress ",
    description:
      "Multicolour Multilayered Two Tier dress with Floral print with a colour combination of blue, green and off-white",
    mainImageUrl:
      "https://drive.google.com/uc?id=14ScxrvVq6fz4rAFzp8LiyIEkSez6zIOZ",
    extraImages: [
      "https://drive.google.com/uc?id=1UyXonmyHKLwzicstuY-FPFfCsnOhTwbL",
      "https://drive.google.com/uc?id=1ApY_cU9ez3s63UOn61ydVd-LLKCENI5p",
      "https://drive.google.com/uc?id=1ua7JWE1-zrCneurJg1N5sCmVF3dYZ1pK",
    ],
    price: 1399,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Multicolour",
    material: "Georgette",
  },
  {
    title: "Maroon dress with side keyholes",
    description: "Maroon midi dress with side keyholes and a back zipper",
    mainImageUrl:
      "https://drive.google.com/uc?id=1THQrbjlwI8CBOeqGDgvV9MhAewagIAl5",
    extraImages: [
      "https://drive.google.com/uc?id=1vf1Yp69LspWL_iVugLAPumyVL6G8n7BM",
      "https://drive.google.com/uc?id=18cbYxBXY5vCljRsNEmOSQAKqXh8amPOP",
      "https://drive.google.com/uc?id=1fmPKwNGx95RxZJJUaIctswwRpNXkAWEH",
    ],

    price: 1250,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Maroon",
    material: "polycrepe",
  },
  {
    title: "Floral printed black dress",
    description:
      "Black Floral printed frilled midi dress with a layer of black lining inside",
    mainImageUrl:
      "https://drive.google.com/uc?id=1THQrbjlwI8CBOeqGDgvV9MhAewagIAl5",
    extraImages: [
      "https://drive.google.com/uc?id=1vf1Yp69LspWL_iVugLAPumyVL6G8n7BM",
      "https://drive.google.com/uc?id=18cbYxBXY5vCljRsNEmOSQAKqXh8amPOP",
      "https://drive.google.com/uc?id=1fmPKwNGx95RxZJJUaIctswwRpNXkAWEH",
    ],

    price: 1199,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "black",
    material: "Georgette",
  },
  {
    title: "Brown full sleeve dress with palm leaf print",
    description:
      "Brown full sleeve midi dress with palm leaf print and a black lining inside the dress",
    mainImageUrl:
      "https://drive.google.com/uc?id=1Xu3ncJMHy85BArU-vH_Lx9WrpWjybqEP",
    extraImages: [
      "https://drive.google.com/uc?id=1QVYrHayFK6UtDV2G6RPRjojjB-gFUTLl",
      "https://drive.google.com/uc?id=1VOhVujSByACzqWIqJd-4XL7zSVFzbqTx",
      "https://drive.google.com/uc?id=1E3aoBucfA1u9DPV0c631H3kZ6ZRbniap",
    ],

    price: 1250,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Brown",
    material: "Chiffon",
  },
  {
    title: "Yellow Rose printed front slit dress",
    description:
      " Front slit dress with lapel collar. Yellow and pink rose Printed dress with an off-white background",
    mainImageUrl:
      "https://drive.google.com/uc?id=15WR1SvH4TtXeVRVOsumRFjCV1-dq1K8n",
    extraImages: [
      "https://drive.google.com/uc?id=1_8DzfXylCdLPTfqYZW_fHuRpp480CG7u",
      "https://drive.google.com/uc?id=1VSW3vXwChWoQtoqR7rFtwlUY2wH9pcSw",
      "https://drive.google.com/uc?id=1pVsLQkxGqABou9nqpw022evvdKTspqOI",
    ],

    price: 999,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Yellow",
    material: "Heavy Georgette",
  },
  {
    title: "Wine Colour Off shoulder dress",
    description:
      " Wine Colour Off shoulder A-line dress Cross Front and Back design with a back zipper",
    mainImageUrl:
      "https://drive.google.com/uc?id=1A19sR2sfHceAmCLtaTLTCCqbz8rB--I_",
    extraImages: [
      "https://drive.google.com/uc?id=1IZXz7ZxtqXytaau8WeiPEpZYttzaBI26",
      "https://drive.google.com/uc?id=1BPU9wKq7N723U6_c6338OATdTyWhAYQG",
      "https://drive.google.com/uc?id=10W7y3uCIQwxOwdgF-qjWpK-Awk7FxlY9",
    ],

    price: 1199,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: " Wine",
    material: "polycrepe",
  },
  {
    title: "Front plete full sleeve maroon top",
    description:
      "Front plete full sleeve maroon top with a middle front slit  ",
    mainImageUrl:
      "https://drive.google.com/uc?id=1JUOTVMrRupu0madWrsp5QzS1oOkctIwl",
    extraImages: [
      "https://drive.google.com/uc?id=1hVUKOOuHfLKHYu2qaSwCptAQ-h5ckdmf",
      "https://drive.google.com/uc?id=1kXT8PnXiI8cAVImmN02L05AvfzCxh8kP",
      "https://drive.google.com/uc?id=1RaGzitYjnsb_uXeWvyvWC5Y847cg4nZD",
    ],

    price: 699,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: " maroon",
    material: "polycrepe",
  },
  {
    title: "One shoulder frilled top",
    description: "One Shoulder dress with a round frill at the top ",
    mainImageUrl:
      "https://drive.google.com/uc?id=10qZRJuDzf_DpzGAvF-76S2LZKn-4aqYE",
    extraImages: [
      "https://drive.google.com/uc?id=1pIWAvjF34tBdfZ7GyzE18RPrtQWQ1to3",
      "https://drive.google.com/uc?id=1acZl65YW2q2T6mcga_FBqSJ48MOBFF79",
      "https://drive.google.com/uc?id=1p6qAd_3Fo95HxofDt2bAFX8lFhp1BnlU",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Bottle Green",
    material: "polycrepe",
  },
  {
    title: "One shoulder frilled top",
    description:
      "One Shoulder polka dot printed black and white dress with a round frill at the top ",
    mainImageUrl:
      "https://drive.google.com/uc?id=1JRgumVV78BPDIb_yeh1x-q7qws_ExZiP",
    extraImages: [
      "https://drive.google.com/uc?id=1zXvsadJ9RoWnvOln7x3TFxbTXYbrWR24",
      "https://drive.google.com/uc?id=1k6nnPInfQ1WRAgYeIxLHrR71-rpqoAK4",
      "https://drive.google.com/uc?id=1YOcMZSm5aP_Dx61wooUrq8bluc3tDTVj",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: " Polka dot",
    material: "polycrepe",
  },
  {
    title: "Front gather polka dot top",
    description:
      "Front gather full sleeve top with a black and white polka dot print",
    mainImageUrl:
      "https://drive.google.com/uc?id=1ma0KAPe81v6QTmVRbua3FPHt3eDIzp_G",
    extraImages: [
      "https://drive.google.com/uc?id=1bPo0w39_-yZYGJ2dzM6jyX2xBCgCalVL",
      "https://drive.google.com/uc?id=16SKvpRYtveIYXqN1cap7EYJH-RC5RkKY",
      "https://drive.google.com/uc?id=1O3hXklnfbKm6SSqCykwDL1xWOURGxWEA",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: " Polka dot",
    material: "polycrepe",
  },
  {
    title: "Fron open black top with flair sleeve",
    description:
      "Front open black top with flaired sleeves and multiple button loops",
    mainImageUrl:
      "https://drive.google.com/uc?id=1Cn5Ney-UPJ9Mfoa47--p_NymefBb_vbv",
    extraImages: [
      "https://drive.google.com/uc?id=1kVSDrRSsYI-YBCu-yN6K9yqtKYPN7Sjh",
      "https://drive.google.com/uc?id=1GpiL4QPXlPeMxPvgrSBhnVF5wZgN3SsJ",
      "https://drive.google.com/uc?id=1cb2eXQjygMpUty-0R43cMxlTEhNpwtn_",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Black",
    material: "Polycrepe",
  },
  {
    title: "Blue frilled top with full sleeves",
    description:
      "Aegean Blue Top with front and back frills and full length sleeves with cuffs",
    mainImageUrl:
      "https://drive.google.com/uc?id=1dNv0NPmXGHLPhTexFnQ3-klc69wKVjB4",
    extraImages: [
      "https://drive.google.com/uc?id=1OUhm-1QrHKgrAWH3D1u5cskNQMGpSIGV",
      "https://drive.google.com/uc?id=13CoKZYRdwY1kYduI_zaOExAPhtVASL5R",
      "https://drive.google.com/uc?id=1CzTf6J0icGP27WfYJF6Q2mV8kEZTujU4",
    ],

    price: 650,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Aegean blue",
    material: "Polycrepe",
  },
  {
    title: "White shirt with black laces",
    description: "White Full sleeve shirts with White lace in front and back",
    mainImageUrl:
      "https://drive.google.com/uc?id=1GuIBJupD3vEC_8wv_PxtMb6HpXzgYLmk",
    extraImages: [
      "https://drive.google.com/uc?id=1J9gC1QrwWJZrVdpBqWaTYatKr-TzDhfL",
      "https://drive.google.com/uc?id=1tFzKfdQnqNGjg7bWFQlU9j6ESTlpMsV-",
      "https://drive.google.com/uc?id=1ygjcJUzzPmn1qqafT0WMetPvFU7VFZHE",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "White",
    material: "Polycrepe",
  },
  {
    title: "Black shirt top with black laces",
    description: " Black Full sleeve shirts with Black lace in front and back",
    mainImageUrl:
      "https://drive.google.com/uc?id=116pBMwhn7ELz15qE3Ed059Tk7AFgbRaR",

    extraImages: [
      "https://drive.google.com/uc?id=1amhCvxKGhKaR3bbeLFie67ZibuThWiyN",
      "https://drive.google.com/uc?id=1M0jzUwSsED6Ykvb8o_rm9cviNFbqlYa5",
      "https://drive.google.com/uc?id=1l5A-fI3E_KCbwS2NN3l_DtlBkcDs1Srf",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Black",
    material: "Polycrepe",
  },
];

module.exports = products;