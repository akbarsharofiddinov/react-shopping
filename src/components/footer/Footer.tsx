import React from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="md:min-h-[50vh] lg:min-h-[30vh] h-full bg-[#333] text-white">
    <div className="container">
      <div className="grid justify-center text-center sm:text-start gap-[40px] sm:grid-cols-2 sm:gap-[40px] md:grid md:grid-cols-3 md:justify-start lg:flex lg:justify-between lg:items-start py-[30px]">
        <div className="flex flex-col gap-[25px] text-[#d1d1d1]">
          <div className="flex flex-col items-center md:items-start gap-[20px]">
            <h1 className="flex flex-col items-start font-bold text-[23px] text-[#f0f0f0]">У вас есть вопрос ? <br /> <span>Позвонить</span></h1>
            <p className="text-[22px] underline">
              +998901234567
            </p>
          </div>
          <ul className="flex gap-[12px] justify-center md:justify-normal">
            <li className="flex items-center justify-center 
                        bg-[#d9d9d933] 
                        p-[10px] rounded-[10px] w-[40px] h-[40px] 
                        text-[40px] transition-colors ease-in-out delay-100 hover:text-[#83a4fd]">
              <BsFacebook />
            </li>
            <li className="flex items-center justify-center 
                        bg-[#d9d9d933] 
                        p-[10px] rounded-[10px] w-[40px] h-[40px] 
                        text-[40px] transition-colors ease-in-out delay-100 hover:text-[#4dbeff]">
              <BsTelegram />
            </li>
            <li className="flex items-center justify-center 
                      bg-[#d9d9d933] 
                      p-[10px] rounded-[10px] w-[40px] h-[40px] 
                      text-[40px] transition-colors ease-in-out delay-100 hover:text-[#fd5d5d]">
              <BsInstagram />
            </li>
            <li className="flex items-center justify-center 
                      bg-[#d9d9d933] 
                      p-[10px] rounded-[10px] w-[40px] h-[40px] 
                      text-[40px] transition-colors ease-in-out delay-100 hover:text-[#fc4949]">
              <BsYoutube />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[25px] text-[#d1d1d1]">
          <h1 className="text-[23px] font-bold text-[#f0f0f0]">Компания</h1>
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
        <div className="flex flex-col gap-[25px] text-[#d1d1d1]">
          <h1 className="text-[23px] font-bold text-[#f0f0f0]">Информация</h1>
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
        <div className="flex flex-col gap-[25px] text-[#d1d1d1]">
          <h1 className="text-[23px] font-bold text-[#f0f0f0]">Служба поддержки</h1>
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
          <button className="bg-transparent border-2 border-dashed border-[#d9d9d933] rounded-[7px] transition ease-in-out delay-100 hover:border-[#4dbeffb2]">
            <Link
              to="https://t.me/@akbar_9425"
              className="text-white flex items-center justify-between gap-[10px] py-[7px] px-[20px] transition ease-in-out delay-100 hover:text-[#4dbeff]"
            >
              <BsTelegram className="text-[20px]" />
              <span>Узнай свой бонус</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
