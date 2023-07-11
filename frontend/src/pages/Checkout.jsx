import { useProduct } from "../context/productContext/context";
import { useForm } from "react-hook-form";
import { useUser } from "../context/userContext/context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { api } from "../constants/api";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const handleAddress = (e) => {
    setSelectedAddress(user.addresses[e.target.value]);
  };

  const cardHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  const orderHandler = async () => {
    try {
      const {
        data: { key },
      } = await axios.get(`${api}api/getkey`);
      const {
        data: { order: orderData },
      } = await axios.post(`${api}payment/checkout`, {
        amount: totalPrice,
      });

      const options = {
        key,
        amount: orderData.amount,
        currency: "INR",
        name: "jyoti",
        description: "jyoCart project",
        order_id: orderData.id,
        // callback_url: `${api}payment/paymentVerification`,
        handler: async (res) => {
          toast.success("payment successfull", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          // verify payment status
          let {
            data: { isVerified },
          } = await axios.post(`${api}payment/paymentVerification`, {
            razorpay_order_id: res.razorpay_order_id,
            razorpay_payment_id: res.razorpay_payment_id,
            razorpay_signature: res.razorpay_signature,
          });
          console.log("success data", isVerified);
          if (isVerified) {
            const order = {
              cart,
              totalPrice,
              totalItems,
              selectedAddress,
              paymentMethod,
              user,
              status: "pending",
            };
            const config = {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            };
            const { data } = await axios.post(`${api}order/`, order, config);
            userDispatch({ type: "ADD_ORDER", payload: data });
            navigate("/ordersuccess");
            toast.success("order successfull", {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("payment failed", {
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
        },
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: "8944832294",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#db1333",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error), "payment error";
    }
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const {
    productState: { cart },
    productDispatch,
  } = useProduct();

  const {
    userState: { user },
    userDispatch,
  } = useUser();

  const getCart = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`${api}cart/`, config);
    productDispatch({ type: "GET_CART", payload: data });
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
  console.log(user, "this is user with address");
  return (
    <div className="mx-auto mt-12 mb-5 max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      <ArrowLeftIcon
        className="text-gray-500 w-5 mt-4 "
        onClick={() => navigate("/cart")}
      />
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form
            noValidate
            className="bg-white px-5  "
            onSubmit={handleSubmit(async (data) => {
              const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              };

              const res = await axios.put(
                `${api}user/${user._id}`,
                { ...data, _id: uuidv4() },
                config
              );
              console.log(res.data, "add address data");
              localStorage.setItem("user", JSON.stringify(res.data));

              userDispatch({
                type: "ADD_ADDRESS",
                payload: res.data,
              });
            })}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 mt-2 text-gray-900">
                  Personal Information
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("name", { required: "name is required" })}
                        id="first-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register("email", {
                          required: "email required",
                          pattern: {
                            value: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/,
                            message: "email is not valid",
                          },
                        })}
                        type="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "phone is required",
                        })}
                        id="phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("street", {
                          required: "street is required",
                        })}
                        id="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("city", {
                          required: "city is required",
                        })}
                        id="city"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("state", {
                          required: "state is required",
                        })}
                        id="region"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("pinCode", {
                          required: "pinCode is required",
                        })}
                        id="pinCode"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  reset
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  add address
                </button>
              </div>
            </div>
          </form>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              choose from existing addresses
            </p>
            <ul role="list" className="divide-y divide-gray-100">
              {user?.addresses?.map((person, index) => (
                <li
                  key={person.name}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex gap-x-4">
                    <input
                      name="address"
                      type="radio"
                      onChange={handleAddress}
                      value={index}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {person.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {person.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {person.city}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {person.state}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  payment methods
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="card"
                      name="card"
                      type="radio"
                      value={paymentMethod}
                      onChange={cardHandler}
                      checked={paymentMethod === "card"}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="card"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      card
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
              <h1 className="text-4xl text-center font-bold py-2">Cart</h1>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
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
                            <div className="text-gray-500 flex">
                              <label
                                htmlFor="password"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                size :
                              </label>
                              {size && <p>{size}</p>}
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
                  <p>{Math.floor(totalPrice)}</p>
                </div>
                <div className="flex  py-2 px-2 justify-between text-base font-medium text-gray-900">
                  <p>total item</p>
                  <p>{totalItems}</p>
                </div>

                <div className="mt-6">
                  <div
                    onClick={orderHandler}
                    className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
                  >
                    order now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
