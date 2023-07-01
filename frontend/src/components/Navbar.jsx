import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-200 shadow-xl h-16   ">
      <ul className="flex justify-evenly items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
