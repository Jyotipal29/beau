import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { api } from "../constants/api";
import { useProduct } from "../context/productContext/context";
import { useUser } from "../context/userContext/context";
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

  const { totalPrice } = cart.reduce(
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

      await axios.delete(`${api}cart/${id}`, config);
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
            {cart.length === 0 ? (
              <div className="flex flex-col  items-center space-y-8 mt-4">
                <h1 className="text-2xl uppercase font-lora font-bold">
                  your cart is empty
                </h1>
                <button className="bg-red-600 w-32 py-2 mb-4 uppercase text-white text-lg font-lora ">
                  <Link to="/products">shop here</Link>
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:grid grid-cols-5 lg:grid-cols-3 gap-5">
                <div className="md:col-span-3 lg:col-span-2 border">
                  <p className="p-2 m-2">
                    Total items in your bag: <b>{cart.length}</b>
                  </p>
                  {cart.map(({ _id, product, quantity, size }) => (
                    <div key={product._id} className="flex border p-1 m-2">
                      <img
                        src={product.mainImageUrl}
                        alt={product.imageAlt}
                        width="100px"
                        height="60px"
                      />
                      <div className="flex flex-col justify-arround gap-2">
                        <h3 className="font-bold text-lg">{product.title}</h3>

                        <div className="flex gap-5">
                          <span>
                            Size: <b>{size}</b>
                          </span>

                          <span>
                            Qty:{" "}
                            <select
                              value={quantity}
                              onChange={(e) => handleQty(e, _id)}
                              className="pl-3 py-0"
                            >
                              {[1, 2, 3, 4, 5].map((i) => (
                                <option key={i} value={i}>
                                  {i}
                                </option>
                              ))}
                            </select>
                          </span>
                        </div>

                        <b>MRP: {product.price}</b>
                      </div>
                      <button
                        onClick={() => removeItem(_id)}
                        className="ml-auto p-2 text-red-600 self-start hover:border-red-600 hover:border"
                      >
                        {sLoading[_id] ? "Removing.." : "Remove"}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:col-span-2 lg:col-span-1 gap-5 border p-4 max-md:mt-20">
                  <b className="">Order Details</b>
                  <p className="flex items-center justify-between pb-4">
                    Bag Total <b>{Math.floor(totalPrice)}</b>
                  </p>
                  <p className="flex items-center justify-between mb-auto">
                    Total Amount <b>RS: {totalPrice}</b>
                  </p>

                  <div className="flex justify-between items-stretch h-14 border bg-white">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                      <b>RS: {totalPrice}</b>
                      <span>Total Amount</span>
                    </div>
                    <Link
                      to="/checkout"
                      className="w-1/2 bg-red-600 text-white flex items-center justify-center hover:font-bold"
                    >
                      Proceed
                    </Link>
                  </div>
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
