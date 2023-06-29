import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const ProductItem = (item) => {
  return (
    <div className="  flex flex-col m-2 justify-center items-center   py-2 cursor-pointer shadow-md rounded-md relative px-2">
      <div className="w-60 h-80">
        <Link to={`/product/${item._id}`}>
          <img
            src={item.mainImageUrl}
            alt="product"
            className="w-full h-full object-cover object-top"
          />
        </Link>
      </div>

      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <button
        className="bg-yellow-400   text-white w-32 py-1 uppercase font-lora text-sm
         "
      >
        add to cart
      </button>
      <button className="absolute right-1 top-1">
        <AiOutlineHeart className="text-3xl " />
      </button>
    </div>
  );
};

export default ProductItem;
