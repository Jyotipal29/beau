import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useProduct } from "../context/productContext/context";

const Cart = () => {
  const {
    productState: { cart },
    productDispatch,
  } = useProduct();

  const totalAmount = cart.reduce(
    (amount, item) => item.price * item.qty + amount,
    0
  );

  const itemCount = cart.reduce((total, item) => item.qty + total, 0);

  const handleQty = (e, product) => {
    productDispatch({
      type: "UPDATE_CART",
      payload: { ...product, qty: Number(e.target.value) },
    });
  };
  console.log(cart, "cart to check qty");

  const removeItem = (id) => {
    productDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <Navbar>
      {!cart.length && <Navigate to="/products" />}
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
        <h1 className="text-4xl text-center font-bold py-2">Cart</h1>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.mainImageUrl}
                      alt={product.imageAlt}
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
                          onChange={(e) => handleQty(e, product)}
                          value={product.qty}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500"
                          onClick={() => removeItem(product.id)}
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
