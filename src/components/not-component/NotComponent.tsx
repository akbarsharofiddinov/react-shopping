import { useNavigate } from "react-router-dom";
import { MyButton } from "..";

interface IProps {
  img: string;
  title: string;
  description: string;
  isButton: boolean;
}

function NotComponent({ img, title, description, isButton }: IProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="bg-[#f6f6f6] py-[50px] px-[50px] rounded-lg flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center max-w-[400px] text-center gap-[20px]">
          <span>
            <img src={img} alt="Fav-Image" />
          </span>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#262626]">
              {title}
            </h1>
            <p className="text-[#767676] text-[15px] md:text-[16px] lg:text-[17px] ">
              {description}
            </p>
            {isButton && (
              <MyButton onClick={() => navigate("/")}>
                Перейти на главную страницу
              </MyButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotComponent;
