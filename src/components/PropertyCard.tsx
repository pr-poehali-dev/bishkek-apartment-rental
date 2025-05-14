
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="card-hover animate-fadeIn overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <Badge 
          className="absolute top-2 right-2 bg-primary-600 hover:bg-primary-600"
        >
          {property.rooms} {property.rooms === 1 ? 'комната' : 'комнаты'}
        </Badge>
      </div>
      
      <CardHeader className="py-3 px-4">
        <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Icon name="MapPin" size={14} className="text-teal-600" />
          {property.location}
        </p>
      </CardHeader>
      
      <CardContent className="px-4 py-1">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Icon name="Bed" size={16} className="text-gray-400" />
            <span>{property.beds} {property.beds === 1 ? 'кровать' : 'кровати'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Bath" size={16} className="text-gray-400" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'ванная' : 'ванные'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="AreaChart" size={16} className="text-gray-400" />
            <span>{property.area} м²</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Wifi" size={16} className="text-gray-400" />
            <span>{property.wifi ? 'Wi-Fi' : 'Нет Wi-Fi'}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 flex items-center justify-between border-t mt-2">
        <p className="font-bold text-lg text-primary-700">
          {property.price} <span className="text-sm font-normal">сом/сутки</span>
        </p>
        <button className="btn-primary flex items-center gap-1">
          <span>Забронировать</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
