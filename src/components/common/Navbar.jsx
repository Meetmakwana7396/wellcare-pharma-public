import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      e.target.id !== "avatarButton" ? setShowMenu(false) : "";
    });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar px-8 py-4 grid grid-cols-3 gap-4 z-50 sticky top-0 bg-white shadow-md`}
    >
      <div className="flex justify-start items-center">
        <h1 className="text-lg font-semibold">Wellcare Pharma</h1>
      </div>
      <div className="col-span-2 flex justify-end">
        <Link
          to="/orders"
          className={`flex items-center p-2 rounded-lg text-white hover:bg-white/10`}
        >
          <BiCart className="text-[25px]" />
          <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
        </Link>
        <img
          id="avatarButton"
          type="button"
          onClick={handleMenuVisibility}
          datadropdowntoggle="userDropdown"
          datadropdownplacement="bottom-start"
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFBOfk-8mYVPpg23ixdQ8WfID6Jy23Kw_aTy-NcZmhA&s"
          alt="User dropdown"
        />

        {/* <!-- Dropdown menu --> */}
        <div
          id="userDropdown"
          className={`z-10 top-[55px] absolute border border-black/20 shadow-md bg-white divide-y divide-secondary/50 rounded-lg w-44 ${
            showMenu ? "" : "hidden"
          }`}
        >
          <ul className="py-2 text-sm" aria-labelledby="avatarButton">
            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-black/10">
                Profile
              </Link>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-black/10">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-black/10">
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-black/10 "
              onClick={() => {
                localStorage.removeItem("user_token");
                navigate("/login");
              }}
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
