import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useProduct } from "../context/productContext/context";
import axios from "axios";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
import { useEffect } from "react";

const Cart = () => {
  const {
    productState: { cart },
    productDispatch,
  } = useProduct();
  const {
    userState: { user },
  } = useUser();

  const getCart = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`${api}cart/`, config);
    console.log(data, "the data");
    productDispatch({ type: "GET_CART", payload: data });
  };

  useEffect(() => {
    getCart();
  }, []);

  const totalAmount = cart.reduce(
    (amount, item) => item.price * item.qty + amount,
    0
  );

  const itemCount = cart.reduce((total, item) => item.qty + total, 0);

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
    console.log(id, "remove id ");
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.delete(`${api}cart/${id}`, config);
    console.log(data, "delted data");
    productDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  console.log(cart, "the cart");
  return (
    <Navbar>
      {!cart.length && <Navigate to="/products" />}
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
        <h1 className="text-4xl text-center font-bold py-2">Cart</h1>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.map(({ _id, product, quantity }) => (
                <li key={product._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product?.mainImageUrl}
                      alt={product?.imageAlt}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>

                        <p className="ml-4">{product.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="password"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>

                        <select
                          onChange={(e) => handleQty(e, _id)}
                          value={quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="4">5</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500"
                          onClick={() => removeItem(_id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex py-2 px-2 justify-between text-base font-medium text-gray-900">
            <p>total</p>
            <p>{Math.floor(totalAmount)}</p>
          </div>
          <div className="flex  py-2 px-2 justify-between text-base font-medium text-gray-900">
            <p>total item</p>
            <p>{itemCount}</p>
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
      </div>
    </Navbar>
  );
};

export default Cart;
