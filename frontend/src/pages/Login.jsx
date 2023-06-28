import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { api } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext/context";
const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { userDispatch } = useUser();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("please fill all the fields", {
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
        setLoading(true);

        const { data } = await axios.post(`${api}auth/login`, {
          email,
          password,
        });
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          userDispatch({ type: "LOGIN", payload: data });
          toast.success(`welcome back ${data.name}`, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
          console.log(data, "data");
          setLoading(false);
        }

        setEmail("");
        setPassword("");
      }
    } catch (err) {
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
      setLoading(false);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container mx-auto px-8 mt-40 max-w-lg">
      <div className="  bg-white shadow-xl rounded-md  py-2 flex flex-col justify-start items-center">
        <h1 className="uppercase text-2xl font-bold font-lora">Login</h1>
        <form className=" w-3/4 my-2" onSubmit={submitHandler}>
          <div className=" py-2">
            <label className="block uppercase font-semibold text-sm text-slate-400 mb-1 font-lora ">
              email
            </label>
            <input
              value={email}
              type="email"
              className="border-2 py-1 block w-full  outline-none font-lora"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" py-2">
            <label className="block uppercase text-sm text-slate-400 mb-1 font-semibold font-lora  ">
              password
            </label>
            <div className="flex justify-center items-center border-2 ">
              <input
                value={password}
                type={open ? "text" : "password"}
                className="py-1 block w-full outline-none font-lora "
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiOutlineEye
                className="text-2xl mx-2 "
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="py-2 space-y-3">
            <button
              type="submit"
              className="bg-red-500 font-lora w-full py-1 uppercase text-white font-semibold text-xl "
            >
              {loading ? (
                <ClipLoader
                  color="white"
                  loading={loading}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "submit"
              )}
            </button>

            <button onClick={() => navigate("/register")} className="font-lora">
              Dont have an account ? Register
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
