
import { Property } from '@/types/property';
import { POPULAR_LOCATIONS } from './locations';
import { ONE_ROOM_IMAGES, TWO_ROOM_IMAGES, getRandomImage, getRandomImages } from './propertyImages';

/**
 * Утилиты для генерации данных о квартирах
 */

// Диапазоны цен для разных типов квартир
const PRICE_RANGES = {
  ONE_ROOM: { min: 1800, max: 2500 },
  TWO_ROOM: { min: 2800, max: 4000 },
};

// Диапазоны площадей для разных типов квартир
const AREA_RANGES = {
  ONE_ROOM: { min: 28, max: 40 },
  TWO_ROOM: { min: 48, max: 70 },
};

/**
 * Генерирует случайное целое число в заданном диапазоне
 */
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Генерирует случайный элемент из массива
 */
export const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Генерирует данные однокомнатной квартиры
 */
export const generateOneRoomProperty = (id: number, customProps: Partial<Property> = {}): Property => {
  return {
    id,
    title: `Уютная однокомнатная квартира ${customProps.location ? 'в ' + customProps.location.split(',')[0] : ''}`,
    description: "Светлая и просторная квартира с современным ремонтом. Расположена в удобном районе города.",
    price: getRandomInt(PRICE_RANGES.ONE_ROOM.min, PRICE_RANGES.ONE_ROOM.max),
    location: customProps.location || getRandomItem(POPULAR_LOCATIONS),
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: getRandomInt(AREA_RANGES.ONE_ROOM.min, AREA_RANGES.ONE_ROOM.max),
    wifi: Math.random() > 0.1, // 90% квартир с Wi-Fi
    images: [getRandomImage(ONE_ROOM_IMAGES)],
    ...customProps
  };
};

/**
 * Генерирует данные двухкомнатной квартиры
 */
export const generateTwoRoomProperty = (id: number, customProps: Partial<Property> = {}): Property => {
  return {
    id,
    title: `Просторная двухкомнатная квартира ${customProps.location ? 'в ' + customProps.location.split(',')[0] : ''}`,
    description: "Комфортная квартира с двумя изолированными комнатами и хорошим ремонтом.",
    price: getRandomInt(PRICE_RANGES.TWO_ROOM.min, PRICE_RANGES.TWO_ROOM.max),
    location: customProps.location || getRandomItem(POPULAR_LOCATIONS),
    rooms: 2,
    beds: getRandomInt(2, 3),
    bathrooms: Math.random() > 0.7 ? 2 : 1, // 30% квартир с двумя санузлами
    area: getRandomInt(AREA_RANGES.TWO_ROOM.min, AREA_RANGES.TWO_ROOM.max),
    wifi: Math.random() > 0.05, // 95% квартир с Wi-Fi
    images: [getRandomImage(TWO_ROOM_IMAGES)],
    ...customProps
  };
};

/**
 * Создает стандартный набор данных о квартирах с заданными параметрами
 */
export const createPropertyBatch = (
  oneRoomCount: number, 
  twoRoomCount: number, 
  startId: number = 1
): Property[] => {
  const properties: Property[] = [];
  let currentId = startId;
  
  // Создаем однокомнатные квартиры
  for (let i = 0; i < oneRoomCount; i++) {
    properties.push(generateOneRoomProperty(currentId++));
  }
  
  // Создаем двухкомнатные квартиры
  for (let i = 0; i < twoRoomCount; i++) {
    properties.push(generateTwoRoomProperty(currentId++));
  }
  
  return properties;
};
