
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import PropertyList from '@/components/PropertyList';
import PropertyFilters from '@/components/PropertyFilters';
import { mockProperties } from '@/data/mockProperties';

const Index = () => {
  const [roomsFilter, setRoomsFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("default");
  
  const filteredAndSortedProperties = useMemo(() => {
    // Фильтрация
    let filtered = [...mockProperties];
    
    if (roomsFilter !== "all") {
      const rooms = parseInt(roomsFilter);
      filtered = filtered.filter(property => property.rooms === rooms);
    }
    
    // Сортировка
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    return filtered;
  }, [roomsFilter, sortOrder]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      
      <main className="flex-grow container-custom">
        <PropertyFilters 
          roomsFilter={roomsFilter}
          setRoomsFilter={setRoomsFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Доступные квартиры
            </h2>
            <p className="text-gray-600">
              Найдено: {filteredAndSortedProperties.length} квартир
            </p>
          </div>
          
          <PropertyList properties={filteredAndSortedProperties} />
        </div>
        
        <div className="bg-primary-100 rounded-lg p-6 mt-8 border border-primary-200">
          <h2 className="text-xl font-semibold text-primary-800 mb-2">Почему стоит выбрать нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary-600 text-white p-3 rounded-full mb-3">
                <Icon name="CheckCircle" size={24} />
              </div>
              <h3 className="font-medium mb-1">Проверенные квартиры</h3>
              <p className="text-sm text-gray-600">Все квартиры проходят тщательную проверку перед размещением</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-teal-600 text-white p-3 rounded-full mb-3">
                <Icon name="CreditCard" size={24} />
              </div>
              <h3 className="font-medium mb-1">Безопасная оплата</h3>
              <p className="text-sm text-gray-600">Несколько способов оплаты с защитой ваших платежей</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary-600 text-white p-3 rounded-full mb-3">
                <Icon name="HeartHandshake" size={24} />
              </div>
              <h3 className="font-medium mb-1">Поддержка 24/7</h3>
              <p className="text-sm text-gray-600">Наша служба поддержки всегда готова помочь вам</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

// Импорт Icon, который используется в компоненте
import Icon from '@/components/ui/icon';
