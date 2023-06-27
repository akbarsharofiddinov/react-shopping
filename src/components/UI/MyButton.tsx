import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

function MyButton({ children, ...props }: IProps) {
  return (
    <button
      {...props}
      className="text-[#333] mt-[10px] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] border md:border-2 border-[#fbc100] font-normal lg:font-bold rounded py-[10px] px-[20px] md:px-[25px] lg:px-[30px]"
    >
      {children}
    </button>
  );
}

export default MyButton;
