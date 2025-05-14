
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PropertyFiltersProps {
  roomsFilter: string;
  setRoomsFilter: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  roomsFilter,
  setRoomsFilter,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 animate-slideUp">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="space-y-2 w-full md:w-auto">
          <h2 className="text-xl font-semibold">Фильтры и сортировка</h2>
          <p className="text-sm text-gray-500">Найдите идеальное жилье для вашего пребывания в Бишкеке</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="w-full sm:w-48">
            <label htmlFor="rooms-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Количество комнат
            </label>
            <Select value={roomsFilter} onValueChange={setRoomsFilter}>
              <SelectTrigger id="rooms-filter" className="w-full">
                <SelectValue placeholder="Все квартиры" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все квартиры</SelectItem>
                <SelectItem value="1">1 комната</SelectItem>
                <SelectItem value="2">2 комнаты</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-48">
            <label htmlFor="price-sort" className="block text-sm font-medium text-gray-700 mb-1">
              Сортировка по цене
            </label>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger id="price-sort" className="w-full">
                <SelectValue placeholder="По умолчанию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">По умолчанию</SelectItem>
                <SelectItem value="asc">Сначала дешевле</SelectItem>
                <SelectItem value="desc">Сначала дороже</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
