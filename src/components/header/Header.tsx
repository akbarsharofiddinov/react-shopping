import React from "react";
import logo from "@assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import clsx from "clsx";
import { useFilterProducts } from "@base/hooks/useFilterFavourite";

const Header: React.FC = () => {
  const favourites = useFilterProducts();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 mb-[0px] sm:mb-[5px] md:mb-[10px] lg:mb-[15px] p-5 shadow-md bg-[#ffffffe8]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="flex gap-5 items-center">
              <span>
                <img
                  src={logo}
                  className="drop-shadow-md w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
                />
              </span>
              <span className="flex flex-col">
                <span className="uppercase text-black text-[16px] sm:text-[20px] lg:text-[24px] font-bold flex">
                  react sneakers
                </span>
                <span className="hidden sm:flex text-[14px] lg:text-[18px] text-[#9d9d9d]">
                  Магазин лучших кроссовок
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                clsx(
                  "flex justify-between gap-3 items-center hover:text-[#7dcfff]",
                  isActive ? "text-[#49b7f7]" : "text-[#5d5d5d]"
                )
              }
            >
              <FiShoppingCart className="text-[22px] lg:text-[25px]" />
              <span className="hidden md:flex text-[14px] lg:text-[16px]">
                Корзина
              </span>
            </NavLink>
            <NavLink
              to="/favourite"
              className={({ isActive }) =>
                clsx(
                  "flex justify-between gap-3 items-center hover:text-[#7dcfff]",
                  isActive ? "text-[#49b7f7]" : "text-[#5d5d5d]"
                )
              }
            >
              <div className="relative">
                <FiHeart className="text-[22px] lg:text-[25px]" />
                <span className="flex items-center justify-center bg-black absolute text-white text-[14px] w-[20px] h-[20px] rounded-full -top-[12px] -right-[15px]">
                  {favourites?.length}
                </span>
              </div>
              <span className="hidden md:flex text-[14px] lg:text-[16px]">
                Избранное
              </span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                clsx(
                  "flex justify-between gap-3 items-center hover:text-[#7dcfff]",
                  isActive ? "text-[#49b7f7]" : "text-[#5d5d5d]"
                )
              }
            >
              <BsPersonCircle className="text-[22px] lg:text-[25px]" />
              <span className="hidden md:flex text-[14px] lg:text-[16px]">
                Войти
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
