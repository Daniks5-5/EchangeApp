import React, { useState, useEffect } from 'react';
import "./EchangeSection.css";

function EchangeSection() {
    const [rates, setRates] = useState(null); // Для хранения курсов валют
    const [loading, setLoading] = useState(true);  // Для отслеживания состояния загрузки
    const [error, setError] = useState(null); // Для хранения ошибок, если они возникнут
    const [searchTerm, setSearchTerm] = useState('');  // Для хранения значения из input

    useEffect(() => {
        // Запрос данных с API ЦБ РФ
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRates(data.Valute); // Сохраняем данные о курсах валют
                setLoading(false);     // Устанавливаем состояние загрузки в false
            })
            .catch(error => {
                setError(error);       // Устанавливаем ошибку, если запрос завершился с ошибкой
                setLoading(false);
            });
    }, []); // Пустой массив зависимостей означает, что useEffect выполнится только один раз при монтировании компонента

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

   // Фильтруем вывод по значению input
   const filteredRates = rates
   ? Object.values(rates).filter(rate =>
       rate.Name.toLowerCase().includes(searchTerm.toLowerCase()))
   : [];

   return (
    <div className='EchangeSection'>
    <div className='echange'>
        <input className='input'
            id='input'
            placeholder='Поиск'
            type='text'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
        />
        <h1>Курсы валют</h1>

        {searchTerm.trim() === '' ? ( //trim для удаления пробелов в начале и в конце строки
            <div>Введите название валюты</div>
        ) : filteredRates.length === 0 ? (
            <div>Валюта не найдена</div>
        ) : (
            <ul>
                {filteredRates.map(rate => (
                    <p key={rate.ID}>
                        {rate.CharCode}: {rate.Name} - {rate.Value} RUB
                    </p>
                ))}
            </ul>
        )}
    </div>
    </div>
);
}

export default EchangeSection;
