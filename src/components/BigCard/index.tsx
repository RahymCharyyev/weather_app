import { FC } from 'react';
import { Card, Flex, Typography, Image } from 'antd';
import humidityIcon from '../../assets/humidity.svg';
import pressureIcon from '../../assets/barometer.svg';
import windIcon from '../../assets/wind.svg';
import { WeatherItemResponseData } from '../../api/types';
import { customIcons } from '../../utils/customIcons';
import './style.css';

type WeatherBigCardProps = {
  city: string;
  weatherData: WeatherItemResponseData;
};

export const WeatherBigCard: FC<WeatherBigCardProps> = ({
  city,
  weatherData,
}) => {
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
            padding: '0px',
          }}
          className='bigCard'
        >
          <Flex align='center' justify='center' gap={50}>
            <Image
              src={`${customIcons[weatherData.weather_condition]}`}
              alt='Weather Icon'
              width={'140px'}
              preview={false}
            />
            <Flex vertical align='center' gap={20}>
              <Typography.Title className='bigCard__wrapper-title'>
                {weatherData.temperature} °C
              </Typography.Title>
              <Typography.Title className='bigCard__wrapper-subtitle'>
                {weatherData.weather_condition}
              </Typography.Title>
            </Flex>
          </Flex>
          <Flex justify='space-around'>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={humidityIcon}
                alt='humidity Icon'
                preview={false}
                width={50}
              />
              {weatherData.humidity} %
            </Typography.Text>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={pressureIcon}
                alt='pressure Icon'
                preview={false}
                width={50}
              />
              {weatherData.air_pressure} mm
            </Typography.Text>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={windIcon}
                alt='wind Icon'
                preview={false}
                width={50}
              />
              {weatherData.wind_direction} | {weatherData.wind_speed} m/s
            </Typography.Text>
          </Flex>
        </Card>
      )}
    </>
  );
};
