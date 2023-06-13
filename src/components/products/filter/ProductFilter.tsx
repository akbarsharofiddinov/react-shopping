import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "@base/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@store/hooks/redux-Hook";
import { setSearchQuery } from "@store/searchQuerySlice/searchQuerySlice";

const ProductFilter: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("")
  const dispatch = useAppDispatch();

  const { searchQuery } = useAppSelector((state) => state.searchQuerySlice);

  const searchRes = useDebounce(searchValue.trim(), 600);

  React.useEffect(() => {
    dispatch(setSearchQuery(searchRes));
  }, [searchRes]);

  return (
    <div className="flex items-center justify-between">
      <h1 className="hidden sm:flex text-[28px] font-bold">
        {searchQuery ? searchQuery : "Все кроссовки"}
      </h1>
      <div className="w-full sm:w-auto inline-block relative overflow-hidden">
        <BsSearch className="absolute top-[50%] -translate-y-[50%] left-[10px] text-[#adadad]" />
        <input
          className="py-[8px] pl-[40px] border-2 !w-full sm:w-[300px] rounded-[10px] pr-[10px]"
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
