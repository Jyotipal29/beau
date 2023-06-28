import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-28 container mx-auto px-16  ">
      <div className="flex justify-center items-start border-2 shadow-lg rounded-xl">
        <div className="flex-1 relative top-12 left-16 space-y-12">
          <h1 className="text-6xl font-bold">
            Elevate
            <br></br>
            Your
            <br></br>
            Fashion
            <br></br>
            Game{" "}
          </h1>
          <h1 className="text-2xl font-semibold">
            {" "}
            Find Your Perfect Ensemble Here
          </h1>
          <button className="bg-red-500 w-40 py-2 text-xl uppercase text-white font-bold">
            <Link to="/products">shop now</Link>
          </button>
        </div>
        <div className="w-[400px] h-[500px] flex-1">
          <img
            src="https://drive.google.com/uc?id=1A19sR2sfHceAmCLtaTLTCCqbz8rB--I_"
            alt="banner"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
