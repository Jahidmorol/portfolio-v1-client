import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between px-4 bg-black text-white w-full items-center h-20 fixed z-10 ">
      <div className="text-4xl font-signeture cursor-pointer ">
        <Link to="/main#home">
          <span className=" text-[#0CB0D8] hover:text-white">F</span>oysal
        </Link>
      </div>

      <ul className=" hidden  lg:flex ">
        <li className="cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/main#home">
            Home
          </Link>
        </li>
        <li className="px-4 cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/#services">
            Services
          </Link>
        </li>
        <li className="px-4 cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/main#portfolio">
            Portfolio
          </Link>
        </li>
        <li className="px-4 cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/main#experience">
            Resume
          </Link>
        </li>
        <li className="px-4 cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/about-me">
            About Me
          </Link>
        </li>
        <li className="px-4 cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/blogs">
            Blogs
          </Link>
        </li>
        <li className="px-4 cursor-pointer  capitalize font-medium  hover:scale-125 duration-200 hover:text-[#0CB0D8]">
          <Link smooth to="/main#contact">
            Contact me
          </Link>
        </li>
      </ul>

      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setMenu(true)}
        >
          <FaBars className="text-[#0CB0D8]" size={30} />
        </button>
        {menu && (
          <div className="absolute top-0 left-0 w-full  ">
            <div className=" p-5 bg-black border rounded  ">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <ul>
                    <li>
                      <div className="text-4xl font-signeture ">
                        <span className=" text-[#0CB0D8] ">F</span>oysal
                      </div>
                    </li>
                  </ul>
                </div>

                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  onClick={() => setMenu(false)}
                >
                  <FaTimes className="text-[#0CB0D8]" size={30} />
                </button>
              </div>

              <div className="text-white">
                <ul className="px-4 capitalize font-semibold  hover:text-[#0CB0D8]">
                  <li>
                    <Link smooth to="/main#home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/#services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/main#portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/main#experience">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/about-me">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/main#contact">
                      Contact me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
