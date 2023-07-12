import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useProduct } from "../context/productContext/context";
import axios from "axios";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sloader from "../components/Sloader";
const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [sLoading, setSLoading] = useState({});

  const {
    productState: { cart },
    productDispatch,
  } = useProduct();
  const {
    userState: { user },
  } = useUser();

  const getCart = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`${api}cart/`, config);
      console.log(data, "the data");
      productDispatch({ type: "GET_CART", payload: data });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const { totalPrice, totalItems } = cart.reduce(
    (accumulator, item) => {
      const { product, quantity } = item;
      const { price } = product; // Assuming `price` property exists in the `product` object
      accumulator.totalPrice += price * quantity;
      accumulator.totalItems += quantity;
      return accumulator;
    },
    { totalPrice: 0, totalItems: 0 }
  );

  const handleQty = async (e, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.put(
      `${api}cart/${id}`,
      {
        quantity: Number(e.target.value),
      },
      config
    );

    console.log(data, "updated qty");
    productDispatch({
      type: "UPDATE_CART",
      payload: data,
    });
  };

  const removeItem = async (id) => {
    try {
      setSLoading((prev) => ({ ...prev, [id]: true }));

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.delete(`${api}cart/${id}`, config);
      console.log(data, "delted data");
      productDispatch({ type: "REMOVE_FROM_CART", payload: id });
      toast.success("product removed", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setSLoading((prev) => ({ ...prev, [id]: false }));
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

  console.log(cart, "the cart");
  return (
    <Navbar>
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
        <h1 className="text-4xl text-center font-bold py-2">Cart</h1>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            {cart.length === 0 && (
              <div className="flex flex-col  items-center space-y-8 mt-4">
                <h1 className="text-2xl uppercase font-lora font-bold">
                  your cart is empty
                </h1>
                <button className="bg-red-600 w-32 py-2 mb-4 uppercase text-white text-lg font-lora ">
                  <Link to="/products">shop here</Link>
                </button>
              </div>
            )}
            <div className="border-t border-gray-200 px-4 mt-2 py-6 sm:px-6">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart.map(({ _id, product, quantity, size }) => (
                    <li key={product._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product?.mainImageUrl}
                          alt={product?.imageAlt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="max-sm:flex max-sm:flex-col">
                          <div className="flex justify-between text-base font-medium text-gray-900 max-sm:flex">
                            <h3>
                              <a href={product.href}>{product.title}</a>
                            </h3>

                            <p className="md:l-4">Rs: {product.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 md:items-end justify-between text-sm max-sm:flex-col max-sm:space-y-2">
                          <div className="text-gray-500 max-sm:flex max-sm:space-x-2">
                            <label
                              htmlFor="password"
                              className="inline md:mr-5 text-sm font-medium text-gray-900"
                            >
                              Qty
                            </label>

                            <select
                              onChange={(e) => handleQty(e, _id)}
                              value={quantity}
                              className="max-sm:w-16 max-ms:h-8 max-sm:p-0">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="4">5</option>
                            </select>
                          </div>
                          <div className="text-gray-500 flex">
                            <label
                              htmlFor="password"
                              className="inline mr-5 text-sm font-bold leading-6 text-gray-900"
                            >
                              Size :
                            </label>
                            {size && <p className="font-bold text-black">{size}</p>}
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-600 hover:text-red-500 max-sm:ml-auto"
                              onClick={() => removeItem(_id)}
                            >
                              {sLoading[_id] ? (
                                <Sloader sLoading={sLoading} />
                              ) : (
                                "Remove"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex py-2 px-2 justify-between text-base font-medium text-gray-900">
                  <p>total</p>
                  <p>{Math.floor(totalPrice)}</p>
                </div>
                <div className="flex  py-2 px-2 justify-between text-base font-medium text-gray-900">
                  <p>total item</p>
                  <p>{totalItems}</p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/checkout"
                    className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link to="/">
                      <button
                        type="button"
                        className="font-medium text-red-600 hover:text-red-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
        <ToastContainer />
      </div>
    </Navbar>
  );
};

export default Cart;
