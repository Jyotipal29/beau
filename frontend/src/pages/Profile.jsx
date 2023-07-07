import Navbar from "../components/Navbar";
import { useUser } from "../context/userContext/context";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api } from "../constants/api";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const {
    userState: { user },
    userDispatch,
  } = useUser();

  const removeHandler = (name) => {
    userDispatch({ type: "REMOVE_ADDRESS", payload: name });
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  console.log(user, "this is user");
  return (
    <div>
      <Navbar>
        <>
          {open && (
            <>
              <form
                noValidate
                className="bg-white px-5 mb-5 "
                onSubmit={handleSubmit(async (data) => {
                  const config = {
                    headers: {
                      Authorization: `Bearer ${user.token}`,
                    },
                  };

                  const res = await axios.put(
                    `${api}user/${user._id}`,
                    data,
                    config
                  );
                  console.log(res.data, "add address data");
                  localStorage.setItem("user", JSON.stringify(res.data));

                  userDispatch({
                    type: "ADD_ADDRESS",
                    payload: res.data,
                  });

                  setOpen(false);
                })}
              >
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
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
                            {...register("name", {
                              required: "name is required",
                            })}
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
                            id="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      cancel
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
            </>
          )}

          <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex  justify-between py-4">
                <div className="flex items-center space-x-6">
                  <div>
                    <img src={user.image} className="w-32 h-32 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900 uppercase">
                      {user.name}
                    </h2>
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">
                      {user.email}
                    </h2>
                    <h2 className="text-xl font-semibold leading-7 text-red-900">
                      {user.role}
                    </h2>
                  </div>
                </div>

                <div>
                  <button
                    className="bg-red-600 px-2 py-1 text-white"
                    onClick={logoutHandler}
                  >
                    logout
                  </button>
                </div>
              </div>

              <button
                className="bg-red-600 py-2 mt-4 text-sm uppercase text-white px-2"
                onClick={() => setOpen(true)}
              >
                add address
              </button>
              <ul role="list" className="  py-5">
                {user?.addresses?.map((person) => (
                  <li
                    key={person.name}
                    className="flex justify-between  py-5 mt-5  px-5 border-2"
                  >
                    <div className="flex gap-x-4">
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
                    <div className=" sm:flex sm:flex-col sm:items-end">
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
                    <div className="flex flex-col items-end">
                      <button
                        className="text-red-500"
                        onClick={() => removeHandler(person.name)}
                      >
                        remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      </Navbar>
    </div>
  );
};

export default Profile;
