import React from 'react'
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  const icons = [{ icon: <BsFacebook />, url: "https://www.facebook.com/uzummarket" }, { icon: <BsInstagram />, url: "https://www.instagram.com/uzum.market" }, { icon: <BsTelegram />, url: "https://t.me/uzum_market" }, { icon: <BsYoutube />, url: "https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA" }]

  return (
    <footer className='h-[100%] min-h-[20vh] bg-[#333] text-white'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-between gap-[40px] py-[40px]'>
          <div className='flex flex-col gap-[25px]'>
            <div className=''>
              <h1>У вас есть вопрос? Позвонить</h1>
              <p className='text-[25px] font-[600] my-[10px]'>+998901234567</p>
            </div>
            <ul className='flex gap-[12px]'>
              {
                icons.map((icon, index) => <Link key={`${icon}_${index}`}
                  className='flex items-center justify-center rounded-[7px] text-[20px] text-white bg-[#d9d9d933] w-[38px] h-[38px] transition-colors hover:text-[#7dcfff]' to={icon.url}>
                  {icon.icon}
                </Link>)
              }
            </ul>
          </div>
          <div className='flex flex-col gap-[25px]'>
            <h1 className='text-[22px]'>Компания</h1>
            <ul className='flex flex-col gap-[8px]'>
              <li><p>B2B савдоси</p></li>
              <li><p>О нас</p></li>
              <li><p>Новости и обзоры</p></li>
              <li><p>Проверить IMEI</p></li>
            </ul>
          </div>
          <div className='flex flex-col gap-[25px]'>
            <h1 className='text-[22px]'>Информация</h1>
            <ul className='flex flex-col gap-[8px]'>
              <li><p>Бесплатная доставка</p></li>
              <li><p>Бонусная система</p></li>
              <li><p>Работа в Техномарт</p></li>
              <li><p>Личный кабинет</p></li>
              <li><p>Контактные телефоны</p></li>
            </ul>
          </div>
          <div className='flex items-start flex-col gap-[25px]'>
            <h1 className='text-[22px]'>Служба поддержки</h1>
            <ul className='flex flex-col gap-[8px]'>
              <li><p>Покупка в рассрочку</p></li>
              <li><p>Возврат товара</p></li>
              <li><p>Гарантия на продукцию</p></li>
              <li><p>Часто задаваемые вопросы</p></li>
            </ul>
            <button className='inline-block bg-transparent border-2 border-dashed border-[#d9d9d933] rounded-[7px] transition hover:border-[#7dcfff]'>
              <Link to="https://t.me/uzum_market" className='text-white flex items-center justify-between gap-[15px] py-[7px] px-[20px] transition hover:text-[#7dcfff] w-full'>
                <BsTelegram className='text-[20px]' />Узнай свой бонус
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer