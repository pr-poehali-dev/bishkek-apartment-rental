
import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '@/types/property';

interface PropertyListProps {
  properties: Property[];
  isLoading?: boolean;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-gray-900">Нет доступных квартир</h3>
        <p className="mt-1 text-gray-500">Пожалуйста, попробуйте изменить параметры фильтра</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
