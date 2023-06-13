import { useAppSelector } from "@store/hooks/redux-Hook"
import search_error from "@assets/images/search-error.webp"

function ErrorProduct() {

  const { searchQuery } = useAppSelector(state => state.searchQuerySlice)

  return (
    <div className="flex flex-col justify-center items-center w-full text-center">
      <img src={search_error} alt="search-error" className="w-[400px] h-[400px]" />
      <h1 className="text-[30px] font-[600]">
        Такой товар не найден: {searchQuery}
      </h1>
    </div>
  )
}

export default ErrorProduct