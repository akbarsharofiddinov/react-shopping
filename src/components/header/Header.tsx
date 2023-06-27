import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@assets/logo/logo.png";
import { BsCart3, BsHeart, BsPersonCircle } from "react-icons/bs";
import { useFavoriteFilter } from "@base/hooks/useFavoriteFilter";
import clsx from "clsx";

const Header: React.FC = () => {
  const filterFavorites = useFavoriteFilter();

  const clickNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="py-5 shadow-md bg-white sticky top-0 left-0 right-0 z-[9999999999] ">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <Link to="/" className="flex gap-3 md:gap-4 lg:gap-5 items-center">
            <span className="flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo-Shoop"
                className="flex w-[43px] h-[43px] md:w-[60px] md:h-[60px] drop-shadow-xl"
              />
            </span>
            <span className="flex flex-col">
              <span className="flex text-[15px] md:text-[19px] lg:text-[24px] font-bold text-black uppercase">
                react sneakers
              </span>
              <span className="hidden md:flex text-[15px] lg:text-[18px] font-normal text-[#9d9d9d]">
                Магазин лучших кроссовок
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                clsx(
                  " flex flex-col text-[17px] items-center gap-[5px] capitalize font-[400]",
                  isActive ? "text-[crimson]" : "text-[#636363]"
                )
              }
              onClick={clickNavigate}
            >
              <span>
                <BsCart3 className=" text-[18px] lg:text-[20px]" />
              </span>
              <span className="text-[15px] hidden md:flex lg:text-[17px]">
                корзина
              </span>
            </NavLink>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                clsx(
                  " flex flex-col text-[17px] items-center gap-[5px] capitalize font-[400]",
                  isActive ? "text-[crimson]" : "text-[#636363]"
                )
              }
              onClick={clickNavigate}
            >
              <span className="relative">
                <BsHeart className=" text-[18px] lg:text-[20px]" />
                <span className="absolute -top-[10px] -right-[14px] bg-slate-900 w-[18px] h-[18px] rounded-full text-white text-[11px] flex items-center justify-center text-center ">
                  {filterFavorites?.length}
                </span>
              </span>
              <span className="text-[15px] hidden md:flex lg:text-[17px]">
                избранное
              </span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                clsx(
                  " flex flex-col text-[17px] items-center gap-[5px] capitalize font-[400]",
                  isActive ? "text-[crimson]" : "text-[#636363]"
                )
              }
              onClick={clickNavigate}
            >
              <span>
                <BsPersonCircle className=" text-[18px] lg:text-[20px]" />
              </span>
              <span className="text-[15px] hidden md:flex lg:text-[17px]">
                войти
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
