import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { api } from "../constants/api";
import { useProduct } from "../context/productContext/context";
import { useUser } from "../context/userContext/context";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sizes = [
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
];

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [sLoading, setSLoading] = useState();
  const [selectedSize, setSelectedSize] = useState({
    name: "S",
    inStock: true,
  });
  console.log(selectedSize.name, "selectedsize");
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productState: { product },
    productDispatch,
  } = useProduct();

  const {
    userState: { user },
  } = useUser();

  const getData = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${api}products/find/${id}`);
      productDispatch({ type: "GET_PRODUCT", payload: data });
      setLoading(false);
    } catch (error) {
      console.log("there is an error");
      setLoading(false);
    }
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const addToCart = async (e, product) => {
    e.preventDefault();

    try {
      setSLoading(true);
      if (user?.token) {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const item = {
          quantity: product.qty,
          product: product._id,
        };

        if (selectedSize) {
          item.size = selectedSize.name;
        }
        const { data } = await axios.post(`${api}cart/`, item, config);
        productDispatch({ type: "ADD_TO_CART", payload: data });
        toast.success("added to cart", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        setSLoading(false);
      } else {
        navigate("/login", { state: { from: window.location.pathname } });
      }
    } catch (error) {
      console.log(error.message);
      setSLoading(false);
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
  const [activeImg, setActiveImg] = useState(
    (product?.mainImageUrl && product?.mainImageUrl) || ""
  );

  useEffect(() => {
    setActiveImg(product?.mainImageUrl && product?.mainImageUrl);
  }, [product]);
  console.log(activeImg, "active img");
  return (
    <Navbar>
      <div className="bg-white">
        <div className="pt-6">
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <>
              <nav aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                  <li className="text-sm">
                    <Link to="/products">back</Link>
                  </li>
                </ol>
              </nav>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-1 md:mx-5 lg:mx-10 max-md:flex max-md:flex-col">
                <div className="flex flex-col p-2 mx-4">
                  <img
                    src={activeImg}
                    alt=""
                    width="400px"
                    className="border"
                  />
                  <div className="flex gap-2 py-1">
                    {product?.extraImages?.map((item) => (
                      <img
                        key={item}
                        src={item}
                        alt=""
                        className="w-24 h-24 rounded-md cursor-pointer border "
                        onClick={() => setActiveImg(item)}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1 lg:col-span-2 mx-2 md:mx-5 LG:MX-10 flex flex-col gap-8">
                  <h1 className="text-2xl md:text-4xl">{product?.title}</h1>

                  <b className="flex items-center">
                    MRP₹ <span className="text-3xl px-3">{product?.price}</span>{" "}
                    <span className="text-sm text-gray-500 font-normal">
                      Inclusive of all taxes
                    </span>
                  </b>

                  {product?.size?.length > 0 && (
                    <div>
                      <b>Sizes</b>
                      <div
                        onClick={(e) =>
                          setSelectedSize({ name: e.target.id, inStock: true })
                        }
                        className="flex gap-2 max-w-fit"
                      >
                        {product?.size?.map((item) => (
                          <span
                            key={item}
                            id={item}
                            className={`cursor-pointer font-bold border w-14 h-14 flex items-center justify-center hover:border-red-600 ${
                              selectedSize.name === item
                                ? "border-red-500 border-[3px]"
                                : ""
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={(e) => addToCart(e, product)}
                    className="flex items-center justify-center md:max-w-fit md:mr-auto px-20 h-14 bg-red-600 text-white rounded-sm"
                  >
                    Add to Cart
                  </button>

                  <div>
                    <b>Product Description</b>
                    <p>{product?.description}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </Navbar>
  );
};

export default ProductDetails;
