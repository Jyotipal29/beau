import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="full">
      <section
        className={`mt-1 min-w-screen flex justify-center max-md:pl-4 items-start space-y-6 flex-col text-white md:pl-20 lg:pl-40 [background-image:url("/new-hero-img.jpg")] bg-cover bg-right w-full min-h-[600px] max-md:[background-position:-550px_0] max-sm:[background-position:-650px_0] bg-no-repeat`}
      >
        <b className="font-bold">Trendy Collenction</b>
        <h1 className="text-7xl max-md:text-6xl font-extrabold">
          Perfect
          <br /> Collection
          <br /> Fashion
        </h1>
        <p className="font-semibold max-w-prose text-slate-200/90">
          BEAU is a trendy and fashion-forward womens wear e-commerce clothing
          brand, offering a wide range of stylish and affordable apparel for the
          modern woman
        </p>
        <Link
          to="/products"
          className="p-4 max-sm:self-center px-8 bg-red-600 hover:bg-red-700 rounded-xl font-extrabold text-xl"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Hero;
