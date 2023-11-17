const daysOfWeek = [
  'Ýekşenbe',
  'Duşenbe',
  'Sişenbe',
  'Çarşenbe',
  'Penşenbe',
  'Anna',
  'Şenbe',
];

const months = [
  'Ýanwar',
  'Fewral',
  'Mart',
  'Aprel',
  'Maý',
  'Iýun',
  'Iýul',
  'Awgust',
  'Sentýabr',
  'Oktýabr',
  'Noýabr',
  'Dekabr',
];

export const formatDate = (date: Date) => {
  return `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} ýyl`;
};

export const formatTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
