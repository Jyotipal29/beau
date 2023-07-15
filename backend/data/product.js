const products = [
  {
    title: "Rose Printed Co-Ord Set",
    description:
      "Yellow and pink rose print with off white primary background colour",
    mainImageUrl:
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335502183_jpttg0",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335503426_llqetg",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335504040_eztguy",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335505330_qxucl7",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335504680_aulbcd",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335505956_zbzzao",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335507180_evfos9",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335508412_a70tpj",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335507790_cw2xa2",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335509034_xexaef",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335510249_wqfdmg",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335510860_fmzqnv",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335511456_ncihw3",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335512045_ec4jkf",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335509653_rc8ygm",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335513895_z1f0pc",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335513280_riepvn",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335514512_vtedlb",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335515747_nksdks",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335516384_krhzui",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335517015_mkvaat",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335518882_lmoljx",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335518264_odab8d",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335519497_evssol",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335520135_kheeag",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335520764_spepui",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335522000_nwdmqk",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335522614_khzqkn",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335523217_xk0jhg",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335523852_hyyxem",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335526260_bh5odw",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335526858_eypc7q",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335525664_wqlkbz",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335527464_ojqvdw",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335524471_p2w5ym",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335528678_lmix0s",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335528067_crvjfe",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335530492_bk4zvt",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335529873_kb4o7v",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335531108_dm1dul",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335532732_ugb3eg",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335531739_b8eviw",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335533670_tdmfqs",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335534566_qqdrcd",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335536250_x4zisz",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Bottle Green",
    material: "polycrepe",
  },
  {
    title: " Sleeves cotton top with eyelet",
    description:
      "Front slit cotton sleeveless top With metal eyelet detailing all over",
    mainImageUrl:
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335542205_xij1en",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335543085_z7nyq1",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335545762_uewviy",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335537083_puwhr9",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335543916_oqf34v",
    ],

    price: 499,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "V neck",
    material: "Cotton",
  },
  {
    title: "One shoulder frilled top",
    description:
      "One Shoulder polka dot printed black and white dress with a round frill at the top ",
    mainImageUrl:
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335538789_xiahfc",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335537083_puwhr9",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335539634_oqqzyr",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335537954_jrwtey",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335541366_tkh97e",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335546985_jbngis",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335546383_posodt",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335548829_i9fxam",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335548210_iudxkk",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335549466_z4pbmx",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335394845_gnwjak",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335397302_igv9u2",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335395462_vtuatq",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335397912_oho3sl",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335396688_zur4sk",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335550689_yvdekm",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335550085_ixmmcz",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335551303_qhnfin",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335552554_dqqkyv",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335551928_k7zkpi",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335554391_pd1tud",
    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335553790_zft9md",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335555002_ofaend",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335555626_y6llhp",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335556858_siycnd",
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
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335558103_of8h0p",

    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335557494_btvop7",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335558710_wbxi8q",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335559345_ibecln",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335559965_xyfqvu",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Black",
    material: "Polycrepe",
  },
  {
    title: "Tangerine polka dot printed wrap top.",
    description:
      "Polka dot printed wrap crop top with lapel collar and full cuff sleeves",
    mainImageUrl:
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335561839_wo1y2m",

    extraImages: [
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335561209_awj58s",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335562462_ldva77",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335563078_shuqxq",
      "https://res.cloudinary.com/dipetklsh/image/upload/f_auto,q_auto/IMG_1689335564336_hvhrxo",
    ],

    price: 599,
    size: ["S", "M", "L", "XL"],
    qty: 1,
    InStock: 5,
    color: "Tangerine",
    material: "Polycrepe",
  },
];

module.exports = products;