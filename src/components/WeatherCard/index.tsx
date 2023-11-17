import { FC } from 'react';
import { Card } from 'antd';
import humidityIcon from '../../assets/humidity.svg';
import pressureIcon from '../../assets/barometer.svg';
import windIcon from '../../assets/wind.svg';
import { WeatherItemResponseData } from '../../api/types';
import { customIcons } from '../../utils/customIcons';
import './style.css';

type WeatherCardProps = {
  city: string;
  weatherData: WeatherItemResponseData;
};

export const WeatherCard: FC<WeatherCardProps> = ({ city, weatherData }) => {
  return (
    <>
      {weatherData && (
        <Card
          title={city}
          headStyle={{
            fontSize: '34px',
            padding: '0px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}
          bodyStyle={{
            height: '100%',
            padding: '5px',
          }}
          className='bigCard'
        >
          <div className='bigCard__wrapper'>
            <img
              src={`${customIcons[weatherData.weather_condition]}`}
              alt='Weather Icon'
              width={'180px'}
            />
            <div className='bigCard__wrapper-firstRow'>
              <h2 className='bigCard__wrapper-title'>
                {weatherData.temperature} °C
              </h2>
              <h2 className='bigCard__wrapper-subtitle'>
                {weatherData.weather_condition}
              </h2>
            </div>
          </div>
          <div className='bigCard__wrapper-secondRow'>
            <p className='bigCard__wrapper-secondRowText'>
              <img src={humidityIcon} alt='humidity Icon' width={70} />
              {weatherData.humidity} %
            </p>
            <p className='bigCard__wrapper-secondRowText'>
              <img src={pressureIcon} alt='pressure Icon' width={50} />
              {weatherData.air_pressure} mm
            </p>
            <p className='bigCard__wrapper-secondRowText'>
              <img src={windIcon} alt='wind Icon' width={50} />
              {weatherData.wind_direction} {weatherData.wind_speed} m/s
            </p>
          </div>
        </Card>
      )}
    </>
  );
};
