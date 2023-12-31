import {
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { City, State } from "country-state-city";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { api } from "../constants/api";
import { useProduct } from "../context/productContext/context";
import { useUser } from "../context/userContext/context";
const Checkout = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod] = useState("card");
  const handleAddress = (pointer) => {
    setSelectedAddress(user.addresses[pointer]);
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
        name: "Beau",
        description: "Beau Shopping",
        image: "https://beau-ui.onrender.com/assets/beau-new-logo-c7eaf4b0.jpg",
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
          contact: "8944832296",
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

  const [allAdd, toggleAllAdd] = useState(false);
  const [newAdd, toggleNewAdd] = useState(false);
  const new_addr_form = useRef(null);
  useEffect(() => {
    if (user?.addresses?.length > 0) toggleNewAdd(true);
  }, [user?.addresses?.length]);

  // state and city
  const [myStateId, setMyStateId] = useState(false);
  const [myState, setMyState] = useState();
  const [myCity, setMyCity] = useState();
  const stateSuggestions = useMemo(
    () =>
      State.getStatesOfCountry("IN").filter(
        (state) =>
          myState &&
          state.name.toLocaleLowerCase().includes(myState.toLocaleLowerCase())
      ),
    [myState]
  );
  const citySuggestions = useMemo(
    () =>
      myCity
        ? City.getCitiesOfState("IN", myStateId).filter((city) =>
            city.name.toLocaleLowerCase().includes(myCity.toLocaleLowerCase())
          )
        : [],
    [myStateId, myCity]
  );

  return (
    <div className="mx-auto mt-12 mb-5 max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      <ArrowLeftIcon
        className="text-gray-500 w-5 mt-4 "
        onClick={() => navigate("/cart")}
      />

      <div className="flex flex-col md:grid grid-cols-5 lg:grid-cols-3 gap-5">
        <div className="md:col-span-3 lg:col-span-2 border p-2">
          <div>
            <b className="text-lg flex justify-between items-center my-2">
              Delivery Address{" "}
              <button
                onClick={() => toggleAllAdd(!allAdd)}
                className="px-3 pl-1 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg max-md:hidden flex items-end justify-center"
              >
                {/* <PencilIcon className="w-8 h-[28px] px-2 max-md:hidden" /> */}
                {allAdd ? (
                  <>
                    <EyeSlashIcon className="w-8 h-[28px] px-2 max-md:hidden" />
                    {`Hide All`}
                  </>
                ) : (
                  <>
                    <EyeIcon className="w-8 h-[28px] px-2 max-md:hidden" />
                    {`Show All`}
                  </>
                )}
              </button>
              <span
                onClick={() => toggleAllAdd(!allAdd)}
                className="max-md:inline hidden cursor-pointer"
              >
                {allAdd ? (
                  <EyeIcon className="w-8 h-[28px] px-2 lg:hidden" />
                ) : (
                  <EyeSlashIcon className="w-8 h-[28px] px-2 lg:hidden" />
                )}
              </span>
            </b>

            {user?.addresses?.length !== 0 && (
              <div className="grid grid-cols-9 gap-4 justify-between border p-1">
                <div className="col-span-6 flex flex-wrap items-center md:space-x-1 max-md:flex-col max-md:items-start">
                  <span className="md:px-3 md:pl-1 py-1 bg-gray-100 rounded-lg max-md:bg-transparent flex items-center">
                    <HomeIcon className="w-8 h-[28px] px-2 max-md:hidden" />{" "}
                    Deliver to{" "}
                    <b className="pl-1">
                      {selectedAddress === null
                        ? user?.addresses[0]?.name
                        : selectedAddress?.name?.includes(" ") ? selectedAddress?.name?.split(" ")[0] : selectedAddress?.name}
                    </b>
                  </span>
                  <div className="md:mx-5 flex items-center justify-between divide-x-2 bg-transparent md:bg-gray-100 md:px-3 md:pl-1 py-1 rounded-lg max-md:py-0.5">
                    <b className="flex items-center justify-center pr-2">
                      <MapPinIcon className="w-8 h-[28px] px-2 max-md:hidden" />{" "}
                      {selectedAddress === null
                        ? user?.addresses[0]?.pinCode
                        : selectedAddress?.pinCode}
                    </b>
                    <b className="pl-1 flex items-center justify-center">
                      <PhoneIcon className="w-8 h-[28px] px-2 max-md:hidden" />
                      {selectedAddress === null
                        ? user?.addresses[0]?.phone
                        : selectedAddress?.phone}
                    </b>
                  </div>
                  <p className="md:py-1 text-gray-600">
                    {selectedAddress === null
                      ? user?.addresses[0]?.street
                      : selectedAddress?.street}
                    ,{" "}
                    {selectedAddress === null
                      ? user?.addresses[0]?.state
                      : selectedAddress?.state}
                    ,{" "}
                    {selectedAddress === null
                      ? user?.addresses[0]?.pinCode
                      : selectedAddress?.pinCode}
                  </p>
                </div>
                <div className="col-span-3 flex justify-end cursor-pointer">
                  <button
                    onClick={() =>
                      new_addr_form && new_addr_form.current?.click()
                    }
                    className="h-12 px-8 border border-black max-lg:hidden hover:border-[3px]"
                  >
                    ADD NEW ADDRESS
                  </button>
                  <span
                    onClick={() => toggleNewAdd(!newAdd) || toggleAllAdd(false)}
                  >
                    <PlusCircleIcon className="w-8 h-[28px] px-2 lg:hidden" />
                  </span>
                </div>
              </div>
            )}

            {/* list all address */}
            <div
              className={`grid-cols-2 gap-4 my-4 max-md:grid-cols-1 ${
                allAdd ? "grid" : "hidden"
              }`}
            >
              <h4 className="col-span-2 w-full bg-gray-100 p-1 font-bold flex items-center justify-between">
                All Addresses{" "}
                <button
                  onClick={() => toggleAllAdd(!allAdd)}
                  className="text-base bg-gray-200 p-1 px-2 hover:bg-gray-300"
                >
                  Hide Addresses
                </button>
              </h4>
              {user?.addresses?.map((person, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleAddress(index) || toggleAllAdd(false)}
                    className="grid grid-cols-8 gap-4 justify-between border p-2 col-span-1 max-lg:col-span-2 group hover:border-red-500 cursor-pointer"
                  >
                    <div className="col-span-6 flex flex-wrap items-center md:space-x-2 max-md:flex-col max-md:items-start">
                      <b className="px-2 py-1 max-md:pl-0 w-full">
                        {person?.name}
                      </b>
                      <div className="md:mx-5 flex items-center justify-between divide-x-2 py-1 rounded-lg space-x-2 max-md:py-0.5 text-sm">
                        <b>{person?.pinCode}</b>
                        <b className="pl-2">{person?.phone}</b>
                      </div>
                      <p className="md:py-1">
                        {person?.street}, {person?.state}, {person?.picnode}
                      </p>
                    </div>
                    <div className="col-span-2 justify-end hidden group-hover:flex">
                      <button className="border border-gray-200 bg-gray-100 rounded-lg flex max-md:items-start h-8 items-center justify-center">
                        <PlusCircleIcon className="w-8 h-[28px] px-2 max-md:hidden" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* new address */}
            <form
              ref={new_addr_form}
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(new_addr_form.current);
                formData.append("_id", uuidv4());

                const formValues = Object.fromEntries(formData);

                const res = await axios.put(
                  `${api}user/${user._id}`,
                  formValues,
                  { headers: { Authorization: `Bearer ${user.token}` } }
                );

                localStorage.setItem("user", JSON.stringify(res.data));

                userDispatch({
                  type: "ADD_ADDRESS",
                  payload: res.data,
                });

                new_addr_form && new_addr_form.current.reset();
                setMyState("");
                setMyStateId("");
                setMyCity("");
              }}
              className={`space-y-2 my-4 p-2 ${
                newAdd ? "max-md:inline" : "max-md:hidden"
              }`}
            >
              <h3 className="text-2xl">Add New Shipping address</h3>
              <div className="grid grid-cols-6 gap-4 max-md:flex max-md:flex-col">
                <div className="relative col-span-3 group">
                  <input
                    value={myState}
                    onChange={(e) => setMyState(e.target.value)}
                    name="state"
                    type="text"
                    placeholder="Enter Region"
                    className="w-full peer"
                  />
                  <div className="absolute w-full h-auto z-[999] overflow-y-auto max-h-56 flex-col group-hover:flex peer-focus:flex hidden">
                    {stateSuggestions.map((state) => (
                      <span
                        key={state.name}
                        onClick={() => {
                          setMyState(state.name);
                          setMyStateId(state.isoCode);
                        }}
                        className="bg-gray-200 py-4 hover:bg-gray-500 px-3"
                      >
                        {state.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative col-span-3 group">
                  <input
                    value={myCity}
                    onChange={(e) => setMyCity(e.target.value)}
                    name="city"
                    type="text"
                    placeholder="Enter City"
                    className="w-full peer"
                  />
                  <div className="absolute w-full z-[999] h-auto overflow-y-auto max-h-56 flex-col group-hover:flex peer-focus:flex hidden">
                    {citySuggestions.map((city) => (
                      <span
                        key={city.name}
                        onClick={() => setMyCity(city.name)}
                        className="bg-gray-200 py-4 hover:bg-gray-500 px-3"
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                </div>
                <input
                  name="street"
                  type="text"
                  placeholder="Enter delivery address"
                  className="col-span-4"
                />
                <input
                  name="pinCode"
                  type="text"
                  placeholder="Enter pincode"
                  className="col-span-2"
                />
              </div>
              <h3 className="text-2xl pt-4">Contact Information</h3>
              <div className="flex items-center justify-stretch max-lg:flex-col max-lg:space-y-4 lg:space-x-2">
                <input type="text" placeholder="Your Name" className="w-full" />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                />
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  className="w-full"
                />
              </div>

              <p className="text-sm text-gray-400 pt-5">
                Don{`'`}t worry, Your data secured with us
              </p>
              <div className="flex items-center justify-start h-10 space-x-2">
                <button className="bg-black text-white border px-10 py-3 hover:font-bold">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:col-span-2 lg:col-span-1 gap-1 border p-4 max-md:mt-20">
          <div className="-mt-2 flex items-center justify-between text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Product Overview</p>
              <b>Items: {totalItems}</b>
            </div>
          </div>
          {cart.map(({ _id, product, quantity, size }) => (
            <div key={_id} className="flex border p-1">
              <img
                src={product.mainImageUrl}
                alt={product.imageAlt}
                width="60px"
                height="60px"
              />
              <div className="flex flex-col justify-arround gap-2">
                <h3 className="font-bold text-lg">{product.title}</h3>

                <div className="flex gap-3">
                  <span>
                    Size: <b>{size}</b>
                  </span>
                  <span>Qty: {quantity}</span>
                  <b className="ml-auto">MRP: {product.price}</b>
                </div>
              </div>
            </div>
          ))}
          <p className="flex items-center justify-between mt-auto pb-4">
            Bag Total <b>{Math.floor(totalPrice)}</b>
          </p>

          <div className="flex justify-between items-stretch h-14 border sticky bottom-0 bg-white">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <b>RS: {totalPrice}</b>
              <span>Total Amount</span>
            </div>
            <button
              onClick={orderHandler}
              className="w-1/2 bg-red-600 text-white flex items-center justify-center hover:font-bold"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Checkout;
