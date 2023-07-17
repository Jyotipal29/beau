import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../context/productContext/context";
import Navbar from "../components/Navbar";
import axios from "axios";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sloader from "../components/Sloader";
const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Products = () => {
  const [sLoading, setSLoading] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sortVal, setSortVal] = useState("Price: Low to High");
  const {
    userState: { user },
  } = useUser();
  const {
    productState: { products, wish },
    productDispatch,
  } = useProduct();

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${api}products/`);
      productDispatch({ type: "GET_PRODUCTS", payload: data });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const wishHandler = async (id) => {
    setSLoading((prev) => ({ ...prev, [id]: true }));
    try {
      if (user?.token) {
        const config = {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        };
        const { data } = await axios.post(
          `${api}wish/toggle/${id}`,
          {},
          config
        );
        productDispatch({ type: "ADD_WISH", payload: data });

        getWish();
        console.log(data, "the data");
        setSLoading((prev) => ({ ...prev, [id]: false }));
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      setSLoading((prev) => ({ ...prev, [id]: false }));
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

  const getWish = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`${api}wish/`, config);
      productDispatch({ type: "GET_WISH", payload: data });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getWish();
  }, []);

  const handleSort = (e, option) => {
    setSortVal(option.name);
  };

  const sortedProducts = products.sort((a, b) =>
    sortVal === "Price: Low to High" ? a.price - b.price : b.price - a.price
  );

  return (
    <Navbar>
      <div>
        <div>
          <div className="bg-white">
            <div>
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    All Products
                  </h1>

                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <p
                                    onClick={(e) => handleSort(e, option)}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {option.name}
                                  </p>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                <section
                  aria-labelledby="products-heading"
                  className="pb-24 pt-6"
                >
                  {loading ? (
                    <Loader loading={loading} />
                  ) : (
                    <div className="grid grid-cols-1  gap-x-8 gap-y-10 lg:grid-cols-4">
                      {/* Product grid */}
                      <div className="lg:col-span-4">
                        <div className="bg-white">
                          <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                            <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                              {sortedProducts.map((product) => (
                                <div
                                  key={product.id}
                                  className="group relative border-2  shadow-sm"
                                >
                                  <div className="absolute top-1  right-2 z-30">
                                    <button
                                      onClick={() => wishHandler(product._id)}
                                    >
                                      {wish.some(
                                        (item) =>
                                          item.product._id === product._id
                                      ) ? (
                                        sLoading[product._id] ? (
                                          <Sloader sLoading={sLoading} />
                                        ) : (
                                          <SolidHeartIcon className="w-8 h-8 text-red-600" />
                                        )
                                      ) : sLoading[product._id] ? (
                                        <Sloader sLoading={sLoading} />
                                      ) : (
                                        <OutlineHeartIcon className="w-8 h-8" />
                                      )}
                                    </button>
                                  </div>
                                  <Link to={`/product/${product._id}`}>
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                      <img
                                        src={product.mainImageUrl}
                                        alt={product.title}
                                        className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                                      />
                                    </div>

                                    <div className="mt-4 flex  flex-col items-center px-2 py-2 space-y-2">
                                      <div>
                                        <h3 className="text-sm text-gray-700">
                                          <a href={product.href}>
                                            <span
                                              aria-hidden="true"
                                              className="absolute inset-0"
                                            />
                                            {product.title}
                                          </a>
                                        </h3>
                                      </div>
                                      <p className="text-sm font-medium text-gray-900">
                                        Rs. {product.price}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              </main>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Navbar>
  );
};

export default Products;
