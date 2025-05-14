
import { Property } from '@/types/property';

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Уютная однокомнатная квартира в центре",
    description: "Светлая и просторная квартира с современным ремонтом. Расположена в центре города, рядом с парком.",
    price: 2000,
    location: "Центр, ул. Киевская",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 35,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 2,
    title: "Двухкомнатная квартира с видом на горы",
    description: "Просторная двухкомнатная квартира с панорамным видом на горы. Полностью меблирована.",
    price: 3500,
    location: "Южные микрорайоны, 12 мкр",
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 55,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1560&q=80"
    ]
  },
  {
    id: 3,
    title: "Современная однокомнатная студия",
    description: "Новая квартира-студия с дизайнерским ремонтом. Идеально для деловых поездок.",
    price: 1800,
    location: "Джал, ул. Ахунбаева",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 28,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 4,
    title: "Двухкомнатная квартира в элитном доме",
    description: "Просторная квартира в новом жилом комплексе с охраной и подземной парковкой.",
    price: 4000,
    location: "Асанбай, ул. Токтогула",
    rooms: 2,
    beds: 3,
    bathrooms: 2,
    area: 70,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 5,
    title: "Однокомнатная квартира рядом с ТЦ",
    description: "Уютная квартира с хорошим ремонтом рядом с крупным торговым центром и рестораном.",
    price: 1900,
    location: "Восток-5, ул. Жукеева-Пудовкина",
    rooms: 1,
    beds: 2,
    bathrooms: 1,
    area: 32,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 6,
    title: "Двухкомнатная квартира в тихом районе",
    description: "Светлая квартира в спокойном районе города. Идеально для семейного отдыха.",
    price: 2800,
    location: "Аламедин, ул. Салиева",
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 48,
    wifi: false,
    images: [
      "https://images.unsplash.com/photo-1556912172-45ba63e02539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  // Добавляем новые квартиры
  {
    id: 7,
    title: "Премиум однокомнатная с панорамным видом",
    description: "Элитная квартира на высоком этаже с панорамным видом на город и горы. Новый дом.",
    price: 2500,
    location: "Филармония, ул. Фрунзе",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 40,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 8,
    title: "Двухкомнатная квартира в новостройке",
    description: "Большая квартира в новом доме с хорошим ремонтом и современной мебелью.",
    price: 3200,
    location: "Джал, ул. Тыналиева",
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 62,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 9,
    title: "Уютная однокомнатная в историческом центре",
    description: "Атмосферная квартира в историческом здании с высокими потолками и деревянными полами.",
    price: 2100,
    location: "Центр, Бульвар Эркиндик",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 36,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 10,
    title: "Большая двухкомнатная квартира с балконом",
    description: "Просторная квартира с большой кухней и уютным балконом. Удобное расположение.",
    price: 3000,
    location: "Аламедин-1, ул. Медерова",
    rooms: 2,
    beds: 3,
    bathrooms: 1,
    area: 58,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 11,
    title: "Стильная однокомнатная студия",
    description: "Современная квартира-студия с модным дизайном и всей необходимой техникой.",
    price: 1950,
    location: "Восток-5, ул. Байтик Баатыра",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 30,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 12,
    title: "Двухкомнатная квартира с кондиционером",
    description: "Комфортная квартира с кондиционером, теплыми полами и хорошей звукоизоляцией.",
    price: 3400,
    location: "12 мкр, ул. Шабдан Баатыра",
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 54,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 13,
    title: "Светлая однокомнатная с ремонтом",
    description: "Чистая, светлая квартира после свежего ремонта. Все удобства для комфортного проживания.",
    price: 1850,
    location: "Аламедин, ул. Молдокулова",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 33,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 14,
    title: "Двухкомнатная с детской площадкой во дворе",
    description: "Семейная квартира в районе с развитой инфраструктурой и детской площадкой во дворе.",
    price: 2900,
    location: "Джал, ул. Курманжан Датка",
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 50,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 15,
    title: "Однокомнатная со свежим ремонтом",
    description: "Уютная квартира после капитального ремонта. Новая мебель и бытовая техника.",
    price: 2200,
    location: "10 мкр, ул. Суеркулова",
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    area: 38,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  {
    id: 16,
    title: "Просторная двухкомнатная с гардеробной",
    description: "Большая квартира с отдельной гардеробной и просторной кухней. Удобно для длительного проживания.",
    price: 3600,
    location: "Южные микрорайоны, ул. Ахунбаева",
    rooms: 2,
    beds: 2,
    bathrooms: 1,
    area: 65,
    wifi: true,
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    ]
  }
];
