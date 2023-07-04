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
      "https://drive.google.com/uc?id=1Nh2CXLAfJpPxY9uC5V9I4wKHJRropZlq",
    extraImages: [
      "https://drive.google.com/uc?id=1UyXonmyHKLwzicstuY-FPFfCsnOhTwbL",
      "https://drive.google.com/uc?id=14ScxrvVq6fz4rAFzp8LiyIEkSez6zIOZ",
      "https://drive.google.com/uc?id=1ua7JWE1-zrCneurJg1N5sCmVF3dYZ1pK",
      "https://drive.google.com/uc?id=1ApY_cU9ez3s63UOn61ydVd-LLKCENI5p",
      "https://drive.google.com/uc?id=1Ldqevm5w1cSwxaEwxp-VPDWfuIfc-SAE",
    ],
    price: 1399,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Multicolour",
    material: "Georgette",
  },
  {
    title: "Maroon dress with side keyholes ",
    description: " Maroon midi dress with side keyholes and a back zipper",
    mainImageUrl:
      "https://drive.google.com/uc?id=1THQrbjlwI8CBOeqGDgvV9MhAewagIAl5",
    extraImages: [
      "https://drive.google.com/uc?id=1vf1Yp69LspWL_iVugLAPumyVL6G8n7BM",
      "https://drive.google.com/uc?id=18cbYxBXY5vCljRsNEmOSQAKqXh8amPOP",
      "https://drive.google.com/uc?id=1fmPKwNGx95RxZJJUaIctswwRpNXkAWEH",
      "https://drive.google.com/uc?id=1sDrCTzNiwcSAazgvIJx6wkQBiJu_ls8X",
      "https://drive.google.com/uc?id=12ScDNBghK5ng3aamjBBe31M5KuRZqYms",
    ],
    price: 1250,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Maroon",
    material: "polycrepe",
  },
  {
    title: "Floral printed black dress ",
    description:
      "Black Floral printed frilled midi dress with a layer of black lining inside",
    mainImageUrl:
      "https://drive.google.com/uc?id=1TcQyUIyu8ERWYiklwsMaOmfPec4bad60",
    extraImages: [
      "https://drive.google.com/uc?id=1lQQgCeltE8diiUqkS8vsFbzYrU6w-rp0",
      "https://drive.google.com/uc?id=1n4So4_2axarQ9MVlnOpNkyNLgSKXJy2v",
      "https://drive.google.com/uc?id=1Mi-UlIDU-1aFSSpPG_87i8h1zfIfOPRD",
      "https://drive.google.com/uc?id=17Xnf-qD9aQY3Ni-_Epgfwn13Z7SHIRR_",
      "https://drive.google.com/uc?id=1EcY9linr_uW-4IGnUset9wED3nDjtfFX",
    ],
    price: 1199,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "black",
    material: "Georgette",
  },
  {
    title: "Brown full sleeve dress with palm leaf print ",
    description:
      "Brown full sleeve midi dress with palm leaf print and a black lining inside the dress",
    mainImageUrl:
      "https://drive.google.com/uc?id=1Xu3ncJMHy85BArU-vH_Lx9WrpWjybqEP",
    extraImages: [
      "https://drive.google.com/uc?id=1QVYrHayFK6UtDV2G6RPRjojjB-gFUTLl",
      "https://drive.google.com/uc?id=1VOhVujSByACzqWIqJd-4XL7zSVFzbqTx",
      "https://drive.google.com/uc?id=1E3aoBucfA1u9DPV0c631H3kZ6ZRbniap",
      "https://drive.google.com/uc?id=1N0P1kuw6RhgEh97l2O6pExE3oY7KV3mM",
      "https://drive.google.com/uc?id=1qTyCVZghU7ImC0DIYJbfJXSJpjDQYzWS",
    ],
    price: 1250,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Brown",
    material: "Chiffon",
  },
  {
    title: "Yellow Rose printed front slit dress ",
    description:
      "Front slit dress with lapel collar. Yellow and pink rose Printed dress with an off-white background",
    mainImageUrl:
      "https://drive.google.com/uc?id=1A19sR2sfHceAmCLtaTLTCCqbz8rB--I_",
    extraImages: [
      "https://drive.google.com/uc?id=1IZXz7ZxtqXytaau8WeiPEpZYttzaBI26",
      "https://drive.google.com/uc?id=1BPU9wKq7N723U6_c6338OATdTyWhAYQG",
      "https://drive.google.com/uc?id=10W7y3uCIQwxOwdgF-qjWpK-Awk7FxlY9",
      "https://drive.google.com/uc?id=18YkVHASdkihlieLCOtMNFmTcOIB5RTLg",
      "https://drive.google.com/uc?id=11yXsUx3_VlsqlKWCQLhxMGMcuugS70TD",
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
      "Wine Colour Off shoulder A-line dress Cross Front and Back design with a back zipper.",
    mainImageUrl:
      "https://drive.google.com/uc?id=1JUOTVMrRupu0madWrsp5QzS1oOkctIwl",
    extraImages: [
      "https://drive.google.com/uc?id=1hVUKOOuHfLKHYu2qaSwCptAQ-h5ckdmf",
      "https://drive.google.com/uc?id=1kXT8PnXiI8cAVImmN02L05AvfzCxh8kP",
      "https://drive.google.com/uc?id=1RaGzitYjnsb_uXeWvyvWC5Y847cg4nZD",
      "https://drive.google.com/uc?id=1o1T7A8qNP8jdL5_6lo9zB7dTr26HZfm5",
      "https://drive.google.com/uc?id=1V9QcCokrTIPu2RMDddk1D-Q10BkxJJgm",
    ],
    price: 1199,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Wine",
    material: " polycrepe",
  },
  {
    title: "Front plete full sleeve maroon top",
    description: "Front plete full sleeve maroon top with a middle front slit",
    mainImageUrl:
      "https://drive.google.com/uc?id=10qZRJuDzf_DpzGAvF-76S2LZKn-4aqYE",
    extraImages: [
      "https://drive.google.com/uc?id=1pIWAvjF34tBdfZ7GyzE18RPrtQWQ1to3",
      "https://drive.google.com/uc?id=1acZl65YW2q2T6mcga_FBqSJ48MOBFF79",
      "https://drive.google.com/uc?id=1p6qAd_3Fo95HxofDt2bAFX8lFhp1BnlU",
      "https://drive.google.com/uc?id=18YM8VyADt5Puu2T0jnEA2aGstD_P3wvr",
      "https://drive.google.com/uc?id=1mRzUhpNfJ6YdRcw_FFSsJ6epjoWogmeN",
    ],
    price: 699,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: " maroon",
    material: " polycrepe",
  },
  {
    title: "One shoulder frilled top",
    description: "One Shoulder dress with a round frill at the top",
    mainImageUrl:
      "https://drive.google.com/uc?id=1JRgumVV78BPDIb_yeh1x-q7qws_ExZiP",
    extraImages: [
      "https://drive.google.com/uc?id=1zXvsadJ9RoWnvOln7x3TFxbTXYbrWR24",
      "https://drive.google.com/uc?id=1k6nnPInfQ1WRAgYeIxLHrR71-rpqoAK4",
      "https://drive.google.com/uc?id=1YOcMZSm5aP_Dx61wooUrq8bluc3tDTVj",
      "https://drive.google.com/uc?id=1VDpK21q-9F_BWtzgkkpFtjXImNxRemaq",
      "https://drive.google.com/uc?id=1EFbjUmDUui4xlGn_S5Eq55CoOVFvemx3",
    ],
    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Bottle Green",
    material: " polycrepe",
  },
  {
    title: "One shoulder frilled top",
    description: "One Shoulder dress with a round frill at the top",
    mainImageUrl:
      "https://drive.google.com/uc?id=1xWMJND128wJ787aIYF6CawmYoi5aEWZU",
    extraImages: [
      "https://drive.google.com/uc?id=1X6SmBbzf_hPfffc8G_11iSXLuPALbFLV",
      "https://drive.google.com/uc?id=1ZiYueN77PxJQ_PMSWkpAaUd7YHHGXqE2",
      "https://drive.google.com/uc?id=1vGcUiQJTU8XvmPbPaRrjpVHP-lG2fQgg",
      "https://drive.google.com/uc?id=1tt56dTjSdrJZhmrqNLvl0R0HrJjouSpF",
      "https://drive.google.com/uc?id=1Ejdzf5cY7iBinI5ixalbzZrLAB60-nTn",
    ],
    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: " Polka dot",
    material: " polycrepe",
  },
];

module.exports = products;