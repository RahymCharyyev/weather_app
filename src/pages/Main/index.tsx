import { Flex, Layout } from 'antd';
import { Title, WeatherBigCard, WeatherSmallCard } from '../../components';
import { useWeatherData } from '../../hooks';
import backgorund from '../../assets/bg.webp';

export const MainPage = () => {
  const weatherData = useWeatherData('ashgabat');
  const ahalData = useWeatherData('ahal');
  const balkanData = useWeatherData('balkanabat');
  const dasoguzData = useWeatherData('dashoguz');
  const lebapData = useWeatherData('turkmenabat');
  const maryData = useWeatherData('mary');

  return (
    <>
      {weatherData && (
        <Layout
          style={{
            padding: '15px 55px',
            backgroundImage: `url(${backgorund})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Title />
          <Flex justify='space-between' wrap='wrap' style={{ rowGap: '10px' }}>
            <WeatherBigCard city='Aşgabat şäheri' weatherData={weatherData} />
            <WeatherBigCard city='Ahal welaýaty' weatherData={ahalData!} />
            <WeatherSmallCard
              city='Balkan welaýaty'
              weatherData={balkanData!}
            />
            <WeatherSmallCard
              city='Daşoguz welaýaty'
              weatherData={dasoguzData!}
            />
            <WeatherSmallCard city='Lebap welaýaty' weatherData={lebapData!} />
            <WeatherSmallCard city='Mary welaýaty' weatherData={maryData!} />
          </Flex>
        </Layout>
      )}
    </>
  );
};
