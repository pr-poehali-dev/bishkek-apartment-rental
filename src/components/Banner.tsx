
import React from 'react';
import Icon from '@/components/ui/icon';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-teal-600 text-white py-10 mb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Комфортное жилье в Бишкеке
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Аренда однокомнатных и двухкомнатных квартир по доступным ценам. Бронируйте онлайн за несколько минут!
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="bg-white text-primary-600 rounded-full p-1" size={20} />
                <span>Без комиссии</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="bg-white text-primary-600 rounded-full p-1" size={20} />
                <span>Круглосуточное заселение</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="bg-white text-primary-600 rounded-full p-1" size={20} />
                <span>Безопасная оплата</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-primary-700 font-bold text-lg mb-2">Найти квартиру</h3>
            <p className="text-gray-600 text-sm mb-4">Укажите даты проживания для бронирования</p>
            <div className="flex items-center justify-center">
              <button className="btn-secondary w-full">
                Посмотреть все варианты
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
