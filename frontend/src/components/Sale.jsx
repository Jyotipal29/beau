import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div>
      <section className=" my-20 flex justify-center max-md:pl-4 items-start space-y-6 flex-col text-white md:pl-20 lg:pl-40 [background-image:url('/new-sale-img.jpg')] bg-cover w-full min-h-[400px] max-md:[background-position:-250px_0] max-sm:[background-position:-400px_0] bg-no-repeat">
        <b className="text-xl font-light">Biggest Offer</b>
        <h1 className="text-4xl font-extrabold">
          Fashion Online At Most
          <br className="my-2 block" />
          Affordable Price
        </h1>

        <Link
          to="/products"
          className="p-4 px-8 bg-red-600 hover:bg-red-700 rounded-2xl font-extrabold text-xl"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Sale;
