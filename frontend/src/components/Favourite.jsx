import { Link } from "react-router-dom";
const Favourite = () => {
  return (
    <div className=" container  mx-auto px-12  sm:px-2 mt-5 mb-5">
      {/* new arrivals */}
      <h1 className="text-2xl font-bold uppercase font-lora text-center">
        youngs
        <span className="text-red-600"> favourite</span>
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        <div className="">
          <Link to="/products">
            <img
              src="imag-5.jpg"
              alt=""
              className="w-96 h-96 rounded-xl  object-cover "
            />
          </Link>
        </div>
        <div className="">
          <Link to="/products">
            <img
              src="img-4.jpg"
              alt=""
              className="w-96 h-96 rounded-xl object-cover"
            />
          </Link>
        </div>
        <div className="">
          <Link to="/products">
            <img
              src="img-6.jpg"
              alt=""
              className="w-96 h-96 rounded-xl object-cover  object-top"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
