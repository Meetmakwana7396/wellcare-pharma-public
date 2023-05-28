import React, { useEffect, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartList } from "../../store/slices/GlobalSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { cart_count } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      dispatch(getCartList());
    }
    document.addEventListener("click", (e) => {
      e.target.id !== "avatarButton" ? setShowMenu(false) : "";
    });
  }, []);

  return (
    <div
      className={`navbar px-8 py-4 grid grid-cols-3 gap-4 z-50 sticky top-0 bg-white shadow-md`}
    >
      <div className="flex justify-start items-center">
        <Link to="/" className="text-lg font-semibold">
          Wellcare Pharma
        </Link>
      </div>
      <div className="col-span-2 flex justify-end">
        <Link
          to="/orders"
          className={`flex items-center mx-3 rounded-lg text-black`}
        >
          <div className="relative">
            <BiCartAlt size={27} className="text-black" />
            {cart_count && (
              <span className="absolute top-[3px] right-1 inline-flex items-center justify-center px-[5px] py-[3px] text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-danger/90 rounded-full">
                {cart_count}
              </span>
            )}
          </div>
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
                if (localStorage.removeItem("user_token")) {
                  localStorage.removeItem("user_token");
                }
                navigate("/login");
              }}
            >
              {localStorage.getItem("user_token") ? "Sign out" : "User Login"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
