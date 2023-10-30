import { FC } from 'react';
import { Typography } from 'antd';

export const Title: FC = () => {
  const now = new Date();

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
  } ${now.getFullYear()} ýyl.`;

  return (
    <>
      <Typography.Title
        level={2}
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: 'white',
        }}
      >
        {formattedDate}
      </Typography.Title>
    </>
  );
};
