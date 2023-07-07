const Hero = () => {
  return (
    <div>
      <section className="mt-1 min-w-screen flex justify-center max-md:pl-4 items-start space-y-6 flex-col text-white md:pl-20 lg:pl-40 [background-image:url('hero.jpeg')] bg-cover bg-right w-full min-h-[600px] max-md:[background-position:-550px_0] max-sm:[background-position:-650px_0] bg-no-repeat">
        {/* <span className="max-lg:block hidden w-full h-full bg-slate-500/70 absolute"></span> */}
        <b className="font-bold">Trendy Collenction</b>
        <h1 className="text-7xl max-md:text-6xl font-extrabold">
          Perfect
          <br /> Collection
          <br /> Fashion
        </h1>
        <p className="font-semibold max-w-prose text-slate-200/90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam omnis
          iusto sed non error voluptate vel dignissimos consectetur
          necessitatibus ratione necessitatibus ratione
        </p>
        <a
          href="#"
          className="p-4 max-sm:self-center px-8 bg-red-600 hover:bg-red-700 rounded-xl font-extrabold text-xl"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default Hero;
