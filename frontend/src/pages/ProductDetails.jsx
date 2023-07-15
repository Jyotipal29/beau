import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../context/productContext/context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sloader from "../components/Sloader";
import { RadioGroup } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sizes = [
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
];

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [sLoading, setSLoading] = useState();
  const [selectedSize, setSelectedSize] = useState({
    name: "S",
    inStock: true,
  });
  console.log(selectedSize.name, "selectedsize");
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
      setLoading(true);
      const { data } = await axios.get(`${api}products/find/${id}`);
      productDispatch({ type: "GET_PRODUCT", payload: data });
      setLoading(false);
    } catch (error) {
      console.log("there is an error");
      setLoading(false);
    }
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const addToCart = async (e, product) => {
    e.preventDefault();

    try {
      setSLoading(true);
      if (user?.token) {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const item = {
          quantity: product.qty,
          product: product._id,
        };

        if (selectedSize) {
          item.size = selectedSize.name;
        }
        const { data } = await axios.post(`${api}cart/`, item, config);
        productDispatch({ type: "ADD_TO_CART", payload: data });
        toast.success("added to cart", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        setSLoading(false);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      setSLoading(false);
      toast.error("something went wrong", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const [activeImg, setActiveImg] = useState(
    product?.mainImageUrl && product?.mainImageUrl
  );
  return (
    <Navbar>
      <div className="bg-white">
        <div className="pt-6">
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <>
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
              {/* <div className="mx-auto relative mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                {}

                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src={product?.extraImages && product?.extraImages[2]}
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
              </div> */}
              {/* new img galary */}
              <div className="mx-auto relative mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="flex justify-center items-center flex-col gap-6">
                  <div className="w-96 h-96 border ">
                    <img
                      src={activeImg}
                      alt="img"
                      className="w-full h-full aspect-square object-top rounded-xl"
                    />
                  </div>

                  <div className="flex flex-row justify-between h-24 md:h-40 ">
                    <img
                      src={product?.mainImageUrl && product?.mainImageUrl}
                      alt=""
                      className="w-24 h-24 md:h-40 md:w-40 rounded-md cursor-pointer border "
                      onClick={() =>
                        setActiveImg(
                          product?.mainImageUrl && product?.mainImageUrl
                        )
                      }
                    />
                    <img
                      src={product?.extraImages[0] && product?.extraImages[0]}
                      alt=""
                      className="w-24 h-24  md:h-40 md:w-40 rounded-md cursor-pointer border "
                      onClick={() =>
                        setActiveImg(
                          product?.extraImages[0] && product?.extraImages[0]
                        )
                      }
                    />
                    <img
                      src={product?.extraImages[1] && product?.extraImages[1]}
                      alt=""
                      className="w-24 h-24 md:h-40 md:w-40 rounded-md cursor-pointer  border"
                      onClick={() =>
                        setActiveImg(
                          product?.extraImages[1] && product?.extraImages[1]
                        )
                      }
                    />
                    <img
                      src={product?.extraImages[2] && product?.extraImages[2]}
                      alt=""
                      className="w-24 h-24 md:h-40 md:w-40 rounded-md cursor-pointer border "
                      onClick={() => setActiveImg(product?.extraImages[2])}
                    />
                    <img
                      src={product?.extraImages[0]}
                      alt=""
                      className="w-24 h-24 md:h-40 md:w-40 rounded-md cursor-pointer  border"
                      onClick={() =>
                        setActiveImg(
                          product?.extraImages[0] && product?.extraImages[2]
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product?.title}
                  </h1>
                  <div className="py-10 space-y-4 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900">
                          {product?.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="sr-only">Color</h3>

                      <div className=" flex space-x-4">
                        <p>Color:</p>
                        <p className="text-base text-gray-900">
                          {" "}
                          {product?.color}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="sr-only">Material</h3>

                      <div className="flex space-x-4">
                        <p>Material:</p>
                        <p className="text-base text-gray-900">
                          {product?.material}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    Rs. {product?.price}
                  </p>

                  {/* Reviews */}

                  <form
                    className="mt-10 relative"
                    onSubmit={(e) => addToCart(e, product)}
                  >
                    {/* Sizes */}
                    {product.size && product.size.length > 0 && (
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            Size
                          </h3>
                        </div>

                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="mt-4"
                        >
                          <RadioGroup.Label className="sr-only">
                            Choose a size
                          </RadioGroup.Label>
                          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                            {sizes.map((size) => (
                              <RadioGroup.Option
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({ active }) =>
                                  classNames(
                                    size.inStock
                                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                                    active ? "ring-2 ring-red-500" : "",
                                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label as="span">
                                      {size.name}
                                    </RadioGroup.Label>
                                    {size.inStock ? (
                                      <span
                                        className={classNames(
                                          active ? "border" : "border-2",
                                          checked
                                            ? "border-red-500"
                                            : "border-transparent",
                                          "pointer-events-none absolute -inset-px rounded-md"
                                        )}
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                      >
                                        <svg
                                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                          viewBox="0 0 100 100"
                                          preserveAspectRatio="none"
                                          stroke="currentColor"
                                        >
                                          <line
                                            x1={0}
                                            y1={100}
                                            x2={100}
                                            y2={0}
                                            vectorEffect="non-scaling-stroke"
                                          />
                                        </svg>
                                      </span>
                                    )}
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      {sLoading ? (
                        <Sloader sLoading={sLoading} />
                      ) : (
                        "Add to cart"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </Navbar>
  );
};

export default ProductDetails;
