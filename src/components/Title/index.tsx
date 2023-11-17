import { FC, useEffect, useState } from 'react';
import { formatDate, formatTime } from '../../utils/formatTime';
import './style.css';

export const Title: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className='title'>
      {formatDate(time)}. {formatTime(time)}
    </h1>
  );
};
