const products = [
  {
    title: "Elegant Floral Print Maxi Dress",
    description:
      "Step out in style with this elegant floral print maxi dress. The vibrant floral pattern adds a touch of femininity, while the flowing silhouette creates a graceful and sophisticated look. Made with high-quality fabric, this dress offers both comfort and style. Perfect for parties, weddings, or any special occasion. Available in multiple sizes and colors to suit your preference.",
    mainImageUrl:
      "https://drive.google.com/file/d/10v2BkF4MlR6LEiX1NLUOEzlj4---VvOC/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1edWGQwcexg-MtD7txar2VTNuHmDO_hTN/view?usp=drive_link",
      "https://drive.google.com/file/d/1iqa_9-r8M6VIWLLBIqAHS4av_rEdl5tT/view?usp=drive_link",
      "https://drive.google.com/file/d/1drLAODwAHzeoM-2cqJqTdUAxFd4L85YN/view?usp=drive_link",
      "https://drive.google.com/file/d/1BVuH0qSWCDvs_S2vb7ovraCnwUnwc7XR/view?usp=drive_link",
      "https://drive.google.com/file/d/1zgeM7oJdIqa4u6VwSyCugzPu1nwcohI3/view?usp=drive_link",
    ],
    price: 59.99,
    size: ["S", "M", "L"],
    category: "Women's Dresses",
    qty: 10,
  },
  {
    title: "Vintage Lace A-Line Dress",
    description:
      "Capture the essence of vintage charm with this lace A-line dress. The intricate lace detailing and flattering A-line silhouette create a timeless and romantic look. Made with delicate lace and lined for comfort, this dress is perfect for formal events or a night out. Pair it with your favorite accessories to complete the elegant ensemble.",
    mainImageUrl:
      "https://drive.google.com/file/d/1Nh2CXLAfJpPxY9uC5V9I4wKHJRropZlq/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1UyXonmyHKLwzicstuY-FPFfCsnOhTwbL/view?usp=drive_link",
      "https://drive.google.com/file/d/14ScxrvVq6fz4rAFzp8LiyIEkSez6zIOZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1ua7JWE1-zrCneurJg1N5sCmVF3dYZ1pK/view?usp=drive_link",
      "https://drive.google.com/file/d/1ApY_cU9ez3s63UOn61ydVd-LLKCENI5p/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ldqevm5w1cSwxaEwxp-VPDWfuIfc-SAE/view?usp=drive_link",
    ],
    price: 79.99,
    size: ["XS", "S", "M", "L"],
    category: "Women's Dresses",
    qty: 5,
  },
  {
    title: "Chic Wrap Style Midi Dress",
    description:
      "Embrace effortless style with this chic wrap-style midi dress. The flattering wrap design enhances your silhouette, while the midi length adds a touch of sophistication. Made with a lightweight and breathable fabric, this dress is perfect for both casual and dressy occasions. Pair it with heels for a polished look or dress it down with sandals for a more relaxed vibe.",
    mainImageUrl:
      "https://drive.google.com/file/d/1THQrbjlwI8CBOeqGDgvV9MhAewagIAl5/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1vf1Yp69LspWL_iVugLAPumyVL6G8n7BM/view?usp=drive_link",
      "https://drive.google.com/file/d/18cbYxBXY5vCljRsNEmOSQAKqXh8amPOP/view?usp=drive_link",
      "https://drive.google.com/file/d/1fmPKwNGx95RxZJJUaIctswwRpNXkAWEH/view?usp=drive_link",
      "https://drive.google.com/file/d/1sDrCTzNiwcSAazgvIJx6wkQBiJu_ls8X/view?usp=drive_link",
      "https://drive.google.com/file/d/12ScDNBghK5ng3aamjBBe31M5KuRZqYms/view?usp=drive_link",
    ],
    price: 49.99,
    size: ["S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 15,
  },

  {
    title: "Bohemian Floral Print Maxi Dress",
    description:
      "Channel your inner bohemian goddess with this stunning floral print maxi dress. The vibrant colors and flowing silhouette create a whimsical and free-spirited look. Crafted with soft and breathable fabric, this dress offers both style and comfort. Perfect for beach vacations, festivals, or any casual outing. Embrace your boho-chic style with this beautiful dress.",
    mainImageUrl:
      "https://drive.google.com/file/d/1TcQyUIyu8ERWYiklwsMaOmfPec4bad60/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1lQQgCeltE8diiUqkS8vsFbzYrU6w-rp0/view?usp=drive_link",
      "https://drive.google.com/file/d/1n4So4_2axarQ9MVlnOpNkyNLgSKXJy2v/view?usp=drive_link",
      "https://drive.google.com/file/d/1Mi-UlIDU-1aFSSpPG_87i8h1zfIfOPRD/view?usp=drive_link",
      "https://drive.google.com/file/d/17Xnf-qD9aQY3Ni-_Epgfwn13Z7SHIRR_/view?usp=drive_link",
      "https://drive.google.com/file/d/1EcY9linr_uW-4IGnUset9wED3nDjtfFX/view?usp=drive_link",
    ],
    price: 69.99,
    size: ["S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 8,
  },
  {
    title: "Classic Little Black Dress",
    description:
      "Every woman needs a classic little black dress in her wardrobe, and this one is a timeless choice. With its sleek silhouette and versatile design, this dress is perfect for any occasion. Made with high-quality fabric, it offers a comfortable and flattering fit. Dress it up with statement jewelry and heels for a sophisticated evening look or pair it with flats for a chic daytime ensemble.",
    mainImageUrl:
      "https://drive.google.com/file/d/1Xu3ncJMHy85BArU-vH_Lx9WrpWjybqEP/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1QVYrHayFK6UtDV2G6RPRjojjB-gFUTLl/view?usp=drive_link",
      "https://drive.google.com/file/d/1VOhVujSByACzqWIqJd-4XL7zSVFzbqTx/view?usp=drive_link",
      "https://drive.google.com/file/d/1E3aoBucfA1u9DPV0c631H3kZ6ZRbniap/view?usp=drive_link",
      "https://drive.google.com/file/d/1N0P1kuw6RhgEh97l2O6pExE3oY7KV3mM/view?usp=drive_link",
      "https://drive.google.com/file/d/1qTyCVZghU7ImC0DIYJbfJXSJpjDQYzWS/view?usp=drive_link",
    ],
    price: 89.99,
    size: ["XS", "S", "M", "L"],
    category: "Women's Dresses",
    qty: 12,
  },
  {
    title: "Flirty Ruffled Wrap Dress",
    description:
      "Make a statement with this flirty ruffled wrap dress. The feminine ruffles and wrap design add a touch of elegance and playfulness. Crafted with lightweight and breathable fabric, this dress ensures comfort all day long. Whether it's a date night or a girls' night out, this dress is sure to turn heads. Pair it with heels and minimal accessories to let the dress shine.",
    mainImageUrl:
      "https://drive.google.com/file/d/1A19sR2sfHceAmCLtaTLTCCqbz8rB--I_/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1IZXz7ZxtqXytaau8WeiPEpZYttzaBI26/view?usp=drive_link",
      "https://drive.google.com/file/d/1BPU9wKq7N723U6_c6338OATdTyWhAYQG/view?usp=drive_link",
      "https://drive.google.com/file/d/10W7y3uCIQwxOwdgF-qjWpK-Awk7FxlY9/view?usp=drive_link",
      "https://drive.google.com/file/d/18YkVHASdkihlieLCOtMNFmTcOIB5RTLg/view?usp=drive_link",
      "https://drive.google.com/file/d/11yXsUx3_VlsqlKWCQLhxMGMcuugS70TD/view?usp=drive_link",
    ],
    price: 54.99,
    size: ["S", "M", "L"],
    category: "Women's Dresses",
    qty: 10,
  },

  {
    title: "Sophisticated Lace Overlay Dress",
    description:
      "Exude elegance and sophistication with this lace overlay dress. The intricate lace detailing adds a touch of femininity, while the classic silhouette creates a timeless look. Made with high-quality fabric, this dress offers both comfort and style. Perfect for formal events, weddings, or any special occasion. Elevate your wardrobe with this stunning dress.",
    mainImageUrl:
      "https://drive.google.com/file/d/1JUOTVMrRupu0madWrsp5QzS1oOkctIwl/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1hVUKOOuHfLKHYu2qaSwCptAQ-h5ckdmf/view?usp=drive_link",
      "https://drive.google.com/file/d/1kXT8PnXiI8cAVImmN02L05AvfzCxh8kP/view?usp=drive_link",
      "https://drive.google.com/file/d/1RaGzitYjnsb_uXeWvyvWC5Y847cg4nZD/view?usp=drive_link",
      "https://drive.google.com/file/d/1o1T7A8qNP8jdL5_6lo9zB7dTr26HZfm5/view?usp=drive_link",
      "https://drive.google.com/file/d/1V9QcCokrTIPu2RMDddk1D-Q10BkxJJgm/view?usp=drive_link",
    ],
    price: 79.99,
    size: ["S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 10,
  },
  {
    title: "Effortless Boho Maxi Dress",
    description:
      "Capture the essence of bohemian style with this effortless boho maxi dress. The flowy and relaxed fit makes it perfect for laid-back occasions. Made with lightweight and breathable fabric, this dress is both comfortable and stylish. Whether it's a beach getaway or a casual day out, this dress will keep you looking effortlessly chic.",
    mainImageUrl:
      "https://drive.google.com/file/d/10qZRJuDzf_DpzGAvF-76S2LZKn-4aqYE/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1pIWAvjF34tBdfZ7GyzE18RPrtQWQ1to3/view?usp=drive_link",
      "https://drive.google.com/file/d/1acZl65YW2q2T6mcga_FBqSJ48MOBFF79/view?usp=drive_link",
      "https://drive.google.com/file/d/1p6qAd_3Fo95HxofDt2bAFX8lFhp1BnlU/view?usp=drive_link",
      "https://drive.google.com/file/d/18YM8VyADt5Puu2T0jnEA2aGstD_P3wvr/view?usp=drive_link",
      "https://drive.google.com/file/d/1mRzUhpNfJ6YdRcw_FFSsJ6epjoWogmeN/view?usp=drive_link",
    ],
    price: 49.99,
    size: ["XS", "S", "M", "L"],
    category: "Women's Dresses",
    qty: 15,
  },
  {
    title: "Charming Polka Dot Swing Dress",
    description:
      "Channel retro vibes with this charming polka dot swing dress. The playful polka dot print and swing silhouette create a fun and flirty look. Made with soft and stretchy fabric, this dress offers all-day comfort. Perfect for parties, picnics, or any daytime event. Embrace your feminine side with this delightful dress.",
    mainImageUrl:
      "https://drive.google.com/file/d/1JRgumVV78BPDIb_yeh1x-q7qws_ExZiP/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1zXvsadJ9RoWnvOln7x3TFxbTXYbrWR24/view?usp=drive_link",
      "https://drive.google.com/file/d/1k6nnPInfQ1WRAgYeIxLHrR71-rpqoAK4/view?usp=drive_link",
      "https://drive.google.com/file/d/1YOcMZSm5aP_Dx61wooUrq8bluc3tDTVj/view?usp=drive_link",
      "https://drive.google.com/file/d/1VDpK21q-9F_BWtzgkkpFtjXImNxRemaq/view?usp=drive_link",
      "https://drive.google.com/file/d/1EFbjUmDUui4xlGn_S5Eq55CoOVFvemx3/view?usp=drive_link",
    ],
    price: 39.99,
    size: ["S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 20,
  },
  {
    title: "Romantic Off-Shoulder Lace Dress",
    description:
      "Indulge in romance with this stunning off-shoulder lace dress. The delicate lace detailing and off-shoulder neckline create a dreamy and feminine look. Made with a soft and stretchy fabric, this dress ensures a comfortable fit. Perfect for date nights, weddings, or any special occasion where you want to make a lasting impression.",
    mainImageUrl:
      "https://drive.google.com/file/d/1xWMJND128wJ787aIYF6CawmYoi5aEWZU/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1X6SmBbzf_hPfffc8G_11iSXLuPALbFLV/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZiYueN77PxJQ_PMSWkpAaUd7YHHGXqE2/view?usp=drive_link",
      "https://drive.google.com/file/d/1vGcUiQJTU8XvmPbPaRrjpVHP-lG2fQgg/view?usp=drive_link",
      "https://drive.google.com/file/d/1tt56dTjSdrJZhmrqNLvl0R0HrJjouSpF/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ejdzf5cY7iBinI5ixalbzZrLAB60-nTn/view?usp=drive_link",
    ],
    price: 89.99,
    size: ["XS", "S", "M"],
    category: "Women's Dresses",
    qty: 8,
  },
  {
    title: "Playful Striped Wrap Dress",
    description:
      "Add a playful touch to your wardrobe with this striped wrap dress. The vibrant stripes and flattering wrap design create a stylish and eye-catching look. Made with lightweight and breathable fabric, this dress is perfect for warmer days. Dress it up with heels or go for a casual vibe with sandals. Embrace the joy of fashion with this fun and trendy dress.",
    mainImageUrl:
      "https://drive.google.com/file/d/1ma0KAPe81v6QTmVRbua3FPHt3eDIzp_G/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1bPo0w39_-yZYGJ2dzM6jyX2xBCgCalVL/view?usp=drive_link",
      "https://drive.google.com/file/d/16SKvpRYtveIYXqN1cap7EYJH-RC5RkKY/view?usp=drive_link",
      "https://drive.google.com/file/d/1O3hXklnfbKm6SSqCykwDL1xWOURGxWEA/view?usp=drive_link",
      "https://drive.google.com/file/d/1pHjvmkRI1JIB9eNcMsaNU7K9nStG5CEg/view?usp=drive_link",
      "https://drive.google.com/file/d/1iKZPKgyXHbIqptSqC4e8V7rpU5rc7a0L/view?usp=drive_link",
    ],
    price: 59.99,
    size: ["S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 12,
  },
  {
    title: "Sleek Sleeveless Bodycon Dress",
    description:
      "Make a statement with this sleek sleeveless bodycon dress. The figure-hugging silhouette accentuates your curves and exudes confidence. Made with a stretchy and comfortable fabric, this dress is perfect for a night out or any special event. Pair it with heels and statement accessories for a glamorous look that will turn heads.",
    mainImageUrl:
      "https://drive.google.com/file/d/1Cn5Ney-UPJ9Mfoa47--p_NymefBb_vbv/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1kVSDrRSsYI-YBCu-yN6K9yqtKYPN7Sjh/view?usp=drive_link",
      "https://drive.google.com/file/d/1GpiL4QPXlPeMxPvgrSBhnVF5wZgN3SsJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1cb2eXQjygMpUty-0R43cMxlTEhNpwtn_/view?usp=drive_link",
      "https://drive.google.com/file/d/1lOyPBaCsysO6GR2zg1hsnOupf23E9xCp/view?usp=drive_link",
      "https://drive.google.com/file/d/1FqGt5ljaSUn-TeenRtV5c6WizR9kYWOy/view?usp=drive_link",
    ],
    price: 69.99,
    size: ["XS", "S", "M", "L"],
    category: "Women's Dresses",
    qty: 10,
  },
  {
    title: "Elegant Satin Evening Gown",
    description:
      "Make a grand entrance with this elegant satin evening gown. The floor-length design and luxurious satin fabric create a regal and sophisticated look. The fitted bodice and flowing skirt flatter your figure, while the off-shoulder neckline adds a touch of allure. Perfect for black-tie events, galas, or formal weddings. Feel like a queen in this exquisite gown.",
    mainImageUrl:
      "https://drive.google.com/file/d/1dNv0NPmXGHLPhTexFnQ3-klc69wKVjB4/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1OUhm-1QrHKgrAWH3D1u5cskNQMGpSIGV/view?usp=drive_link",
      "https://drive.google.com/file/d/13CoKZYRdwY1kYduI_zaOExAPhtVASL5R/view?usp=drive_link",
      "https://drive.google.com/file/d/1CzTf6J0icGP27WfYJF6Q2mV8kEZTujU4/view?usp=drive_link",
      "https://drive.google.com/file/d/19OZixL2Xjz3vNJ4kicb3cJ8pal4lOTC-/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ch_ghlmXr6Ig0sW812-5mTUZTNifa4fE/view?usp=drive_link",
    ],
    price: 129.99,
    size: ["S", "M", "L"],
    category: "Women's Dresses",
    qty: 5,
  },
  {
    title: "Effortless T-Shirt Dress",
    description:
      "Stay comfortable and stylish with this effortless t-shirt dress. The relaxed fit and soft fabric make it perfect for everyday wear. Dress it up with a statement belt and heels, or keep it casual with sneakers. Versatile and easy to style, this dress is a must-have in any wardrobe.",
    mainImageUrl:
      "https://drive.google.com/file/d/1GuIBJupD3vEC_8wv_PxtMb6HpXzgYLmk/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1J9gC1QrwWJZrVdpBqWaTYatKr-TzDhfL/view?usp=drive_link",
      "https://drive.google.com/file/d/1tFzKfdQnqNGjg7bWFQlU9j6ESTlpMsV-/view?usp=drive_link",
      "https://drive.google.com/file/d/1ygjcJUzzPmn1qqafT0WMetPvFU7VFZHE/view?usp=drive_link",
      "https://drive.google.com/file/d/1OroJci-Mz1K3KgOO5s1IdtRLuJQo3E1Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1Dnf2Z3SP9qhSd4ZjzW7fMWrifF0Kflql/view?usp=drive_link",
    ],
    price: 34.99,
    size: ["XS", "S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 15,
  },
  {
    title: "Chic Belted Shirt Dress",
    description:
      "Achieve a polished and sophisticated look with this chic belted shirt dress. The classic shirt collar and waist belt create a tailored and flattering silhouette. Made with a lightweight and breathable fabric, this dress is perfect for both office and casual wear. Pair it with heels for a professional look or dress it down with flats for a more relaxed vibe.",
    mainImageUrl:
      "https://drive.google.com/file/d/116pBMwhn7ELz15qE3Ed059Tk7AFgbRaR/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/1amhCvxKGhKaR3bbeLFie67ZibuThWiyN/view?usp=drive_link",
      "https://drive.google.com/file/d/1M0jzUwSsED6Ykvb8o_rm9cviNFbqlYa5/view?usp=drive_link",
      "https://drive.google.com/file/d/1l5A-fI3E_KCbwS2NN3l_DtlBkcDs1Srf/view?usp=drive_link",
      "https://drive.google.com/file/d/1FDIOJ5MujTQpd1z9wCHd8pcjipOnq_yP/view?usp=drive_link",
      "https://drive.google.com/file/d/1ytymoNREWxe7Arxj4dESWyY9bMhaoES2/view?usp=drive_link",
    ],
    price: 49.99,
    size: ["S", "M", "L"],
    category: "Women's Dresses",
    qty: 20,
  },
  {
    title: "Bold Floral Print Skater Dress",
    description:
      "Make a statement with this bold floral print skater dress. The vibrant colors and playful floral pattern create a lively and eye-catching look. Made with a stretchy and comfortable fabric, this dress offers both style and ease of movement. Whether it's a garden party or a summer outing, this dress will make you stand out in style.",
    mainImageUrl:
      "https://drive.google.com/file/d/1lDKnUC4fL-iWZjBQgMDN48WeWwe_0c1J/view?usp=drive_link",
    extraImages: [
      "https://drive.google.com/file/d/11Z7uUbarozRGcWAG-EDX2gw0fQ3yOWUc/view?usp=drive_link",
      "https://drive.google.com/file/d/1DVw_10v_PacNQsT_tYj8XiCagoaC-0d_/view?usp=drive_link",
      "https://drive.google.com/file/d/1WnCjPzW9XH7w9gKLZ95O0OVYVq5Ndawy/view?usp=drive_link",
      "https://drive.google.com/file/d/1Pn-HxQkAMzW0QNlxberCJ2uxRhNJeE6u/view?usp=drive_link",
      "https://drive.google.com/file/d/1bRrfMyhG8CbR1PugGuEaIOAHQLAGT5-l/view?usp=drive_link",
    ],
    price: 44.99,
    size: ["XS", "S", "M", "L", "XL"],
    category: "Women's Dresses",
    qty: 18,
  },
];
