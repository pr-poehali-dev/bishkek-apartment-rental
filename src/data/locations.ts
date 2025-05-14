
/**
 * Локации квартир в Бишкеке
 * Структурированные данные о районах и улицах города для использования в каталоге
 */
export const DISTRICTS = {
  CENTER: 'Центр',
  SOUTH: 'Южные микрорайоны',
  EAST: 'Восток',
  ALAMEDDIN: 'Аламедин',
  JAL: 'Джал',
} as const;

export const STREETS = {
  KIEV: 'ул. Киевская',
  FRUNZE: 'ул. Фрунзе',
  ERKINDIK: 'Бульвар Эркиндик',
  TOKTOGULOV: 'ул. Токтогула',
  AHUNBAEV: 'ул. Ахунбаева',
  JUKEYEVA: 'ул. Жукеева-Пудовкина',
  SALIEV: 'ул. Салиева',
  TYNALIEV: 'ул. Тыналиева',
  MEDEROV: 'ул. Медерова',
  BAYTIK: 'ул. Байтик Баатыра',
  SHABDAN: 'ул. Шабдан Баатыра',
  MOLDOKULOVA: 'ул. Молдокулова',
  KURMANJAN: 'ул. Курманжан Датка',
  SUERKULOV: 'ул. Суеркулова',
} as const;

/**
 * Генерирует полный адрес на основе района и улицы
 */
export const createAddress = (district: string, street: string): string => {
  return `${district}, ${street}`;
};

/**
 * Популярные локации для квартир
 */
export const POPULAR_LOCATIONS = [
  createAddress(DISTRICTS.CENTER, STREETS.KIEV),
  createAddress(DISTRICTS.CENTER, STREETS.FRUNZE),
  createAddress(DISTRICTS.CENTER, STREETS.ERKINDIK),
  createAddress(DISTRICTS.SOUTH, 'ул. Ахунбаева'),
  createAddress(DISTRICTS.SOUTH, '12 мкр'),
  createAddress(DISTRICTS.EAST, STREETS.JUKEYEVA),
  createAddress(DISTRICTS.EAST, '5 мкр'),
  createAddress(DISTRICTS.ALAMEDDIN, STREETS.SALIEV),
  createAddress(DISTRICTS.ALAMEDDIN, STREETS.MEDEROV),
  createAddress(DISTRICTS.JAL, STREETS.TYNALIEV),
  createAddress(DISTRICTS.JAL, STREETS.AHUNBAEV),
  createAddress(DISTRICTS.JAL, STREETS.KURMANJAN),
];
