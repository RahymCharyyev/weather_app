import { FC } from 'react';
import { Card, Flex, Typography, Image } from 'antd';
import { formatTime } from '../../utils/FormatTime';
import { weatherTranslations } from '../../i18n';
import sunriseIcon from '../../assets/sunrise.svg';
import sunsetIcom from '../../assets/sunset.svg';
import humidityIcon from '../../assets/humidity.svg';
import pressureIcon from '../../assets/barometer.svg';
import windIcon from '../../assets/wind.svg';
import { WeatherItemResponseData } from '../../api/types';
import { customIcons } from '../../utils/customIcons';
import './style.css';

const hPaToMmHg = 0.750062;

type WeatherBigCardProps = {
  city: string;
  weatherData: WeatherItemResponseData;
};

export const WeatherBigCard: FC<WeatherBigCardProps> = ({
  city,
  weatherData,
}) => {
  const pressureInMmHg = (weatherData?.main.pressure || 0) * hPaToMmHg;

  return (
    <>
      {weatherData && (
        <Card
          title={city}
          headStyle={{
            fontSize: '32px',
            padding: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          className='bigCard'
        >
          <Flex align='center' justify='center'>
            <Image
              src={`${customIcons[weatherData.weather[0]?.icon]}`}
              alt='Weather Icon'
              width={'150px'}
              preview={false}
            />
            <Flex vertical align='center'>
              <Typography.Title className='bigCard__wrapper-title'>
                {`${Math.floor(weatherData.main.temp)} ℃`}
              </Typography.Title>
              <Typography.Title className='bigCard__wrapper-subtitle'>
                {weatherTranslations[weatherData?.weather[0]?.description]}
              </Typography.Title>
            </Flex>
          </Flex>
          <Flex justify='space-between'>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={sunriseIcon}
                alt='sunrise Icon'
                preview={false}
                width={50}
              />
              {formatTime(weatherData.sys.sunrise)}
            </Typography.Text>

            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={sunsetIcom}
                alt='sunset Icon'
                preview={false}
                width={50}
              />
              {formatTime(weatherData.sys.sunset)}
            </Typography.Text>
          </Flex>
          <Flex justify='space-between'>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={humidityIcon}
                alt='humidity Icon'
                preview={false}
                width={50}
              />
              {weatherData.main.humidity} %
            </Typography.Text>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image
                src={pressureIcon}
                alt='pressure Icon'
                preview={false}
                width={50}
              />
              {pressureInMmHg.toFixed(0)} mm
            </Typography.Text>
            <Typography.Text className='bigCard__wrapper-rowText'>
              <Image src={windIcon} alt='wind Icon' preview={false} />
              {weatherData.wind.speed} m/s
            </Typography.Text>
          </Flex>
        </Card>
      )}
    </>
  );
};
