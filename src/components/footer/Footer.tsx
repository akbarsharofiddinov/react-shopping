import React from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="max-h-[40vh] min-h-[20vh] bg-[#333] text-white">
    <div className="container">
      <div className="flex justify-between items-start py-[30px]">
        <div className="flex flex-col gap-[25px]">
          <div className="">
            <h1>У вас есть вопрос? Позвонить</h1>
            <p className="text-[18px] font-normal sm:text-[20px] md:text-[22px] lg:text-[24px] md:font-bold my-[10px]">
              +998901234567
            </p>
          </div>
          <ul className="flex gap-[12px]">
            <li className="flex items-center justify-center text-[21px] bg-[#d9d9d933] p-[10px] rounded-[10px] w-[37px] h-[37px]">
              <BsFacebook />
            </li>
            <li className="flex items-center justify-center text-[21px] bg-[#d9d9d933] p-[10px] rounded-[10px] w-[37px] h-[37px]">
              <BsTelegram />
            </li>
            <li className="flex items-center justify-center text-[21px] bg-[#d9d9d933] p-[10px] rounded-[10px] w-[37px] h-[37px]">
              <BsInstagram />
            </li>
            <li className="flex items-center justify-center text-[21px] bg-[#d9d9d933] p-[10px] rounded-[10px] w-[37px] h-[37px]">
              <BsYoutube />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h1 className="text-[20px]">Компания</h1>
          <ul className="flex flex-col gap-[8px]">
            <li>
              <p>B2B савдоси</p>
            </li>
            <li>
              <p>О нас</p>
            </li>
            <li>
              <p>Новости и обзоры</p>
            </li>
            <li>
              <p>Проверить IMEI</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h1 className="text-[20px]">Информация</h1>
          <ul className="flex flex-col gap-[8px]">
            <li>
              <p>Бесплатная доставка</p>
            </li>
            <li>
              <p>Бонусная система</p>
            </li>
            <li>
              <p>Работа в Техномарт</p>
            </li>
            <li>
              <p>Личный кабинет</p>
            </li>
            <li>
              <p>Контактные телефоны</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h1 className="text-[20px]">Служба поддержки</h1>
          <ul className="flex flex-col gap-[8px]">
            <li>
              <p>Покупка в рассрочку</p>
            </li>
            <li>
              <p>Возврат товара</p>
            </li>
            <li>
              <p>Гарантия на продукцию</p>
            </li>
            <li>
              <p>Часто задаваемые вопросы</p>
            </li>
          </ul>
          <button className="bg-transparent py-[7px] px-[20px] border-2 border-dashed border-[#d9d9d933] rounded-[7px]">
            <Link
              to="https://t.me/@akbar_9425"
              className="text-white flex items-center justify-between"
            >
              <BsTelegram className="text-[20px]" />
              Узнай свой бонус
            </Link>
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
