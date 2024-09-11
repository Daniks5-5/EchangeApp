import React, { useState, useEffect } from 'react';
import Button  from '../../assets/button.svg';
import './MainSection.css';
import Header from '../Header/Header';
import EchangeSection from '../EchangeSection/EchangeSection';

function MainSection() {
  const [time, setTime] = useState(new Date());

  // Обновление времени каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Очистка интервала 
    return () => clearInterval(interval);
  }, []);
  // Функция для добавления ведущего нуля к минутам и секундам
  const formatTime = (num) => (num < 10 ? `0${num}` : num);
  // Извлекаем часы, минуты и секунды из текущего времени
  const hours = time.getHours();
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  // Форматируем время как строку
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="mainSection">
        <Header/>
      <div className="content">
        <h1>Курсы валют ЦБ РФ на {timeString}</h1>
      </div>
     <div className='link'>
     <a href='#EchangeSection'> <img src={Button} className='img'/></a> 
     </div>
     <EchangeSection />
    </div>

  );
}

export default MainSection;
