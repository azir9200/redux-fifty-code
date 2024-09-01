import { Link } from "react-router-dom";
import { Moon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
const Navbar = () => {
  const products = useAppSelector((store) => store.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-200  to-gray-400 rounded-sm px-3">
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-4 ">
        <Link to={"/"}>
          <p className="text-4xl rounded-lg  text-green-200">logo </p>
          <div className="text-4xl  text-green-600">logo one</div>
        </Link>
        <div className=" md:flex items-center space-x-5">
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] p-2 transition-transform hover:scale-105 hover:shadow-2xl  inline-block hover:bg-green-700  duration-300  "
                to={"/products"}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] p-2 transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block "
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] py-2 px-4 transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block "
                to={"/cart"}
              >
                <ShoppingCart size={28} />
              </Link>
              <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
                {products.length}
              </span>
            </li>
            <li>
              <button className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] py-2 px-4  transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block ">
                <Moon size={28} />
              </button>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] p-2 transition-transform hover:scale-105 hover:shadow-2xl  inline-block hover:bg-green-700  duration-300  "
                to={"/login"}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
