import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
const Favourite = () => {
  return (
    <div className=" container  mx-auto px-12  sm:px-2 mt-5">
      {/* new arrivals */}
      <h1 className="text-2xl font-bold uppercase font-lora text-center">
        youngs
        <span className="text-red-600"> favourite</span>
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        <div className="">
          <img
            src="imag-5.jpg"
            alt=""
            className="w-96 h-96 rounded-xl  object-cover "
          />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold font-lora">Trending on instagram</h1>
              <h1 className="text-gray-400 font-lora">explore now</h1>
            </div>

            <div className="px-2">
              <Link to="/products">
                <ArrowRightIcon className="w-6 h-6 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="img-4.jpg"
            alt=""
            className="w-96 h-96 rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold font-lora">Trending on instagram</h1>
              <h1 className="text-gray-400 font-lora">explore now</h1>
            </div>
            <div className="px-2">
              <Link to="/products">
                <ArrowRightIcon className="w-6 h-6 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="img-6.jpg"
            alt=""
            className="w-96 h-96 rounded-xl object-cover  object-top"
          />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold font-lora">Trending on instagram</h1>
              <h1 className="text-gray-400 font-lora">explore now</h1>
            </div>
            <div className="px-2">
              <Link to="/products">
                <ArrowRightIcon className="w-6 h-6 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
