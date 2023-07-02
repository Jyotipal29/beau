import { Link, useParams } from "react-router-dom";
import { useProduct } from "../context/productContext/context";
import { useEffect } from "react";
import { useUser } from "../context/userContext/context";
const OrderSuccess = () => {
  const { id } = useParams();
  const { productDispatch } = useProduct();
  const { userDispatch } = useUser();

  useEffect(() => {
    productDispatch({ type: "CART_REMOVE" });
    userDispatch({ type: "RESET_CURR_ORDER" });
  }, []);
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Order succefully placed
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          your order id {id}.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            continue shoping
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccess;
