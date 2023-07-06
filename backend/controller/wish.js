const Wishlist = require("../model/wish");
const Product = require("../model/product");

const toggleWish = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user's wishlist
    let wishlist = await Wishlist.findOne({ user: req.user._id });

    // If the wishlist doesn't exist, create a new one
    if (!wishlist) {
      wishlist = new Wishlist({
        user: req.user._id,
        wishItems: [],
      });
    }

    // Check if the product is already in the wishlist
    const existingItem = wishlist.wishItems.find(
      (item) => item.product.toString() === id
    );

    if (existingItem) {
      // Product is already in the wishlist, so remove it
      wishlist.wishItems = wishlist.wishItems.filter(
        (item) => item.product.toString() !== id
      );
    } else {
      // Product is not in the wishlist, so add it
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      wishlist.wishItems.push({
        product: product._id,
        quantity: 1,
      });
    }

    // Save the updated wishlist
    await wishlist.save();

    wishlist = await Wishlist.findOne({ user: req.user._id }).populate({
      path: "wishItems.product",
      model: "Product",
    });

    // Return the updated wishlist
    res.status(200).json(wishlist);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
};

module.exports = { toggleWish };
