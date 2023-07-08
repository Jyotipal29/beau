import Favourite from "../components/Favourite";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sale from "../components/Sale";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Hero />
        <Trending />
        <Sale />
        <Favourite />
        <Footer />
      </Navbar>
    </div>
  );
};

export default Home;
