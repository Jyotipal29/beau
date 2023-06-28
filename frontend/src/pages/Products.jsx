import axios from "axios";
import { api } from "../constants/api";
import { useEffect, useState } from "react";
import { useProduct } from "../context/productContext/context";
import { AiOutlineFilter } from "react-icons/ai";
import ProductItem from "../components/ProductItem";
const Products = () => {
  //   const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    productState: { products },
    productDispatch,
  } = useProduct();

  const getProduct = async () => {
    // setLoading(true);
    const { data } = await axios.get(`${api}products/`);
    console.log(data, "data");
    productDispatch({ type: "GET_PRODUCTS", payload: data });
    // setLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4  container mx-auto px-2 mt-20 relative  ">
        <div className="flex-1 ">
          <div className="px-4 flex items-center ">
            <h1 className="uppercase text-yellow-400 font-lora font-bold text-xl pr-4">
              all products
            </h1>
            <span
              className="text-yellow-400 md:hidden cursor-pointer"
              onClick={() => {
                setOpen(!open);
                console.log("clicking", open);
              }}
            >
              <AiOutlineFilter />
            </span>
          </div>

          <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2">
            {products.map((item) => (
              <>
                <ProductItem {...item} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
