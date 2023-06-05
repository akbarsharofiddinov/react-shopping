import React from "react";
import { BsSearch } from "react-icons/bs";

const ProductFilter: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[28px] font-bold">Все кроссовки</h1>
      <div className="inline-block relative overflow-hidden">
        <BsSearch className="absolute top-[50%] -translate-y-[50%] left-[10px] text-[#adadad]" />
        <input type="search" placeholder="Поиск..." className="py-[8px] pl-[40px] border-2 w-[300px] rounded-[10px] pr-[10px]" />
      </div>
    </div>
  );
};

export default ProductFilter;
