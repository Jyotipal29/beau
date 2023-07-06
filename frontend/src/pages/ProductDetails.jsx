import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../context/productContext/context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
import { HeartIcon } from "@heroicons/react/24/outline";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productState: { product },
    productDispatch,
  } = useProduct();

  const {
    userState: { user },
  } = useUser();

  const getData = async (id) => {
    try {
      const { data } = await axios.get(`${api}products/find/${id}`);
      productDispatch({ type: "GET_PRODUCT", payload: data });
    } catch (error) {
      console.log("there is an error");
    }
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const addToCart = async (e, product) => {
    e.preventDefault();

    try {
      if (user?.token) {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.post(
          `${api}cart/`,
          {
            quantity: product.qty,
            product: product._id,
          },
          config
        );
        productDispatch({ type: "ADD_TO_CART", payload: data });
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const wishHandler = async (id) => {
    console.log(id, "this is id");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`${api}wish/toggle/${id}`, {}, config);
      console.log(data, "this is wish data");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li className="text-sm">
                <Link to="/products">back</Link>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto relative mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {}

            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product?.extraImages && product?.extraImages[3]}
                alt={product?.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product?.extraImages && product?.extraImages[0]}
                  alt={product?.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product?.extraImages && product?.extraImages[1]}
                  alt={product?.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product?.mainImageUrl}
                alt={product?.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product?.title}
              </h1>
              <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product?.price}
              </p>

              {/* Reviews */}

              <form
                className="mt-10 relative"
                onSubmit={(e) => addToCart(e, product)}
              >
                {/* Sizes */}

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
                <button
                  type="submit"
                  onClick={() => wishHandler(product._id)}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-1 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <HeartIcon className="w-8 h-8" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ProductDetails;
