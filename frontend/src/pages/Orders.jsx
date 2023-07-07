import Navbar from "../components/Navbar";
import { useUser } from "../context/userContext/context";
const Orders = () => {
  const {
    userState: { order },
  } = useUser();
  console.log(order, "this is order");
  return (
    <div>
      <Navbar>
        {order.map((or) => (
          <>
            <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 bg-white ">
              <h1 className="text-xl  font-bold py-2">Order: {or._id}</h1>
              <h1
                className={`text-lg  font-bold py-2 ${
                  or.status === "pending" ? "text-red-500" : ""
                }`}
              >
                status: {or.status}
              </h1>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {or.cart.map(({ product }) => (
                      <li key={product._id} className="flex py-6">
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
                            <div className="text-gray-500 flex">
                              <label
                                htmlFor="password"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty:
                              </label>
                              <p>{product.qty}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        ))}
      </Navbar>
    </div>
  );
};

export default Orders;
