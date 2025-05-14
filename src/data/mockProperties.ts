import { Property } from "@/types/property";
import { DISTRICTS, STREETS, createAddress } from "./locations";
import { ONE_ROOM_IMAGES, TWO_ROOM_IMAGES } from "./propertyImages";
import {
  createPropertyBatch,
  generateOneRoomProperty,
  generateTwoRoomProperty,
} from "./propertyGenerators";

/**
 * Специфические квартиры с фиксированными параметрами
 * Эти объекты создаются вручную для предоставления разнообразных вариантов
 */
const featuredProperties: Property[] = [
  // Однокомнатные квартиры с особыми характеристиками
  {
    id: 1,
    title: "Уютная однокомнатная квартира в центре",
    description:
      "Светлая и просторная квартира с современным ремонтом. Расположена в центре города, рядом с парком.",
    price: 2000,
    location: createAddress(DISTRICTS.CENTER, STREETS.KIEV),
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 35,
    wifi: true,
    images: [ONE_ROOM_IMAGES[0]],
  },
  {
    id: 3,
    title: "Современная однокомнатная студия",
    description:
      "Новая квартира-студия с дизайнерским ремонтом. Идеально для деловых поездок.",
    price: 1800,
    location: createAddress(DISTRICTS.JAL, STREETS.AHUNBAEV),
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 28,
    wifi: true,
    images: [ONE_ROOM_IMAGES[1]],
  },
  {
    id: 7,
    title: "Премиум однокомнатная с панорамным видом",
    description:
      "Элитная квартира на высоком этаже с панорамным видом на город и горы. Новый дом.",
    price: 2500,
    location: createAddress(DISTRICTS.CENTER, STREETS.FRUNZE),
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 40,
    wifi: true,
    images: [ONE_ROOM_IMAGES[3]],
  },

  // Двухкомнатные квартиры с особыми характеристиками
  {
    id: 2,
    title: "Двухкомнатная квартира с видом на горы",
    description:
      "Просторная двухкомнатная квартира с панорамным видом на горы. Полностью меблирована.",
    price: 3500,
    location: createAddress(DISTRICTS.SOUTH, "12 мкр"),
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 55,
    wifi: true,
    images: [TWO_ROOM_IMAGES[0]],
  },
  {
    id: 4,
    title: "Двухкомнатная квартира в элитном доме",
    description:
      "Просторная квартира в новом жилом комплексе с охраной и подземной парковкой.",
    price: 4000,
    location: createAddress(DISTRICTS.CENTER, STREETS.TOKTOGULOV),
    rooms: 2,
    beds: 3,
    bathrooms: 2,
    area: 70,
    wifi: true,
    images: [TWO_ROOM_IMAGES[1]],
  },
  {
    id: 8,
    title: "Двухкомнатная квартира в новостройке",
    description:
      "Большая квартира в новом доме с хорошим ремонтом и современной мебелью.",
    price: 3200,
    location: createAddress(DISTRICTS.JAL, STREETS.TYNALIEV),
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 62,
    wifi: true,
    images: [TWO_ROOM_IMAGES[3]],
  },
];

/**
 * Создаем автоматически сгенерированные квартиры для дополнения коллекции
 * Используем оригинальные ID, чтобы избежать дублирования
 */
const usedIds = featuredProperties.map((property) => property.id);
const maxId = Math.max(...usedIds);

// Получаем список уникальных локаций, уже использованных в избранных квартирах
const usedLocations = new Set(
  featuredProperties.map((property) => property.location),
);

// Создаем дополнительные квартиры с параметрами, отличающимися от избранных
const additionalProperties = [
  generateOneRoomProperty(5, {
    title: "Однокомнатная квартира рядом с ТЦ",
    description:
      "Уютная квартира с хорошим ремонтом рядом с крупным торговым центром и рестораном.",
    price: 1900,
    location: createAddress(DISTRICTS.EAST, STREETS.JUKEYEVA),
    images: [ONE_ROOM_IMAGES[2]],
  }),
  generateTwoRoomProperty(6, {
    title: "Двухкомнатная квартира в тихом районе",
    description:
      "Светлая квартира в спокойном районе города. Идеально для семейного отдыха.",
    price: 2800,
    location: createAddress(DISTRICTS.ALAMEDDIN, STREETS.SALIEV),
    wifi: false,
    images: [TWO_ROOM_IMAGES[2]],
  }),
  // Дополнительные 10 квартир с разнообразными параметрами
  generateOneRoomProperty(9, {
    title: "Уютная однокомнатная в историческом центре",
    description:
      "Атмосферная квартира в историческом здании с высокими потолками и деревянными полами.",
    location: createAddress(DISTRICTS.CENTER, STREETS.ERKINDIK),
    images: [ONE_ROOM_IMAGES[4]],
  }),
  generateOneRoomProperty(11, {
    title: "Стильная однокомнатная студия",
    description:
      "Современная квартира-студия с модным дизайном и всей необходимой техникой.",
    location: createAddress(DISTRICTS.EAST, STREETS.BAYTIK),
    images: [ONE_ROOM_IMAGES[5]],
  }),
  generateOneRoomProperty(13, {
    title: "Светлая однокомнатная с ремонтом",
    description:
      "Чистая, светлая квартира после свежего ремонта. Все удобства для комфортного проживания.",
    location: createAddress(DISTRICTS.ALAMEDDIN, STREETS.MOLDOKULOVA),
    images: [ONE_ROOM_IMAGES[6]],
  }),
  generateOneRoomProperty(15, {
    title: "Однокомнатная со свежим ремонтом",
    description:
      "Уютная квартира после капитального ремонта. Новая мебель и бытовая техника.",
    location: createAddress(DISTRICTS.SOUTH, STREETS.SUERKULOV),
    images: [ONE_ROOM_IMAGES[7]],
  }),
  generateTwoRoomProperty(10, {
    title: "Большая двухкомнатная квартира с балконом",
    description:
      "Просторная квартира с большой кухней и уютным балконом. Удобное расположение.",
    location: createAddress(DISTRICTS.ALAMEDDIN, STREETS.MEDEROV),
    images: [TWO_ROOM_IMAGES[4]],
  }),
  generateTwoRoomProperty(12, {
    title: "Двухкомнатная квартира с кондиционером",
    description:
      "Комфортная квартира с кондиционером, теплыми полами и хорошей звукоизоляцией.",
    location: createAddress(DISTRICTS.SOUTH, STREETS.SHABDAN),
    images: [TWO_ROOM_IMAGES[5]],
  }),
  generateTwoRoomProperty(14, {
    title: "Двухкомнатная с детской площадкой во дворе",
    description:
      "Семейная квартира в районе с развитой инфраструктурой и детской площадкой во дворе.",
    location: createAddress(DISTRICTS.JAL, STREETS.KURMANJAN),
    images: [TWO_ROOM_IMAGES[6]],
  }),
  generateTwoRoomProperty(16, {
    title: "Просторная двухкомнатная с гардеробной",
    description:
      "Большая квартира с отдельной гардеробной и просторной кухней. Удобно для длительного проживания.",
    location: createAddress(DISTRICTS.SOUTH, STREETS.AHUNBAEV),
    images: [TWO_ROOM_IMAGES[7]],
  }),
];

/**
 * Основной экспортируемый массив квартир, объединяющий избранные и дополнительные объекты
 */
export const mockProperties: Property[] = [
  ...featuredProperties,
  ...additionalProperties,
].sort((a, b) => a.id - b.id); // Сортируем по ID для согласованности

/**
 * Группировка квартир по количеству комнат для удобства использования
 */
export const getPropertiesByRooms = (roomCount: number): Property[] => {
  return mockProperties.filter((property) => property.rooms === roomCount);
};

export const oneRoomProperties = getPropertiesByRooms(1);
export const twoRoomProperties = getPropertiesByRooms(2);

/**
 * Функция для создания дополнительных тестовых данных при необходимости
 */
export const generateMoreProperties = (
  oneRoomCount: number,
  twoRoomCount: number,
): Property[] => {
  const nextId = Math.max(...mockProperties.map((p) => p.id)) + 1;
  return createPropertyBatch(oneRoomCount, twoRoomCount, nextId);
};
