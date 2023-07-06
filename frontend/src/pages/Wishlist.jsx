import axios from "axios";
import Navbar from "../components/Navbar";
import { useProduct } from "../context/productContext/context";
import { api } from "../constants/api";
import { useUser } from "../context/userContext/context";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";

const Wishlist = () => {
  const {
    userState: { user },
  } = useUser();
  const {
    productState: { wish },
    productDispatch,
  } = useProduct();

  const getWish = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`${api}wish/`, config);
    productDispatch({ type: "GET_WISH", payload: data });
    // setWishList(data);
  };
  useEffect(() => {
    getWish();
  }, []);
  const wishHandler = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`${api}wish/toggle/${id}`, {}, config);
      console.log(data, "the data");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Navbar>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
              your wishlist
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {wish.map(({ product }) => (
                <div
                  key={product.id}
                  className="group relative border-2  shadow-sm"
                >
                  <div className="absolute top-1  right-2 z-30">
                    <button onClick={() => wishHandler(product._id)}>
                      <HeartIcon className="w-8 h-8" />
                    </button>
                  </div>
                  <Link to={`/product/${product._id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.mainImageUrl}
                        alt={product.title}
                        className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                      />
                    </div>

                    <div className="mt-4 flex justify-between px-2 py-2">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </a>
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Wishlist;
