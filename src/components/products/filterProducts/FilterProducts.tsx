import React from "react";
import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@store/hooks/hookRedux";
import { handleSearchQuery } from "@store/searchQuerySlice/searchQuerySlice";
import { useDebounce } from "@base/hooks/useDebaounce";

const FilterProducts: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useAppDispatch();

  const { searchQuery } = useAppSelector((state) => state.searchQuerySlice);

  const searchRes = useDebounce(searchValue.trim(), 700);

  React.useEffect(() => {
    dispatch(handleSearchQuery(searchRes));
  }, [searchRes]);

  return (
    <div className="mb-[17px] md:mb-[20px] lg:mb-[25px] flex flex-col md:flex-row md:items-center justify-between gap-3">
      <h1 className="hidden md:block  md:text-[20px] lg:text-[25px] font-bold">
        {searchQuery ? searchQuery : "Все кроссовки"}
      </h1>
      <div className="border-2 rounded-[10px] overflow-hidden relative inline-block">
        <BsSearch className="text-[#acacac] !text-[15px] md:!text-[18px] absolute top-2/4 left-[15px] -translate-y-[50%]" />
        <input
          className="w-full md:w-[200px] lg:w-[280px] py-[5px] md:py-[8px] pl-[40px] pr-[20px]"
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterProducts;
