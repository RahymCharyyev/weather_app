import { FC, useEffect, useState } from 'react';
import { Typography } from 'antd';

export const Title: FC = () => {
  const now = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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

  const formattedDate = `${daysOfWeek[now.getDay()]}, ${now.getDate()} ${
    months[now.getMonth()]
  } ${now.getFullYear()} ýyl`;
  const formattedHours = time.getHours().toString().padStart(2, '0');
  const formattedMinutes = time.getMinutes().toString().padStart(2, '0');
  const formattedSeconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <Typography.Title
      level={2}
      style={{
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '2px',
      }}
    >
      {formattedDate} | {formattedHours}:{formattedMinutes}:{formattedSeconds}
    </Typography.Title>
  );
};
