import FavNotImage from "@assets/fav/fav-not.svg";
import { NotComponent } from "@components/index";

const FavoriteNot = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <NotComponent
        img={FavNotImage}
        title="Список избранного пуст"
        description="Любимые продукты для просмотра или покупки позже."
        isButton={true}
      />
      <div className="text-center">
        <h1 className="text-[#262626] mb-[7px] font-semibold md:mb-[10px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
          Добавьте свой любимый
        </h1>
        <p className="text-[#262626] text-[15px] md:text-[18px] lg:text-[20px]">
          Нажмите на символ ♡ на товаре. Войдите, и все ваши выборы будут
          сохранены
        </p>
      </div>
    </div>
  );
};

export default FavoriteNot;
