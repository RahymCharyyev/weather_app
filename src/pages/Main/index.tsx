import { Flex, Layout } from 'antd';
import Marquee from 'react-fast-marquee';
import { Title, WeatherBigCard } from '../../components';
import { useWeatherData } from '../../hooks';
import backgorund from '../../assets/bg.mp4';
import { customIcons } from '../../utils/customIcons';
import { MarqueeItem } from '../../components/Marquee';

const cities = [
  'Aşgabat',
  'Balkanabat',
  'Türkmenbaşy',
  'Daşoguz',
  'Türkmenabat',
  'Mary',
];

export const MainPage = () => {
  const weatherData = useWeatherData();

  const filteredCities = weatherData?.filter((city: { place: string }) =>
    cities.includes(city.place)
  );

  return (
    <>
      {filteredCities && (
        <Layout
          style={{
            background: 'transparent',
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          >
            <source src={backgorund} type='video/mp4' />
          </video>
          <Title />
          <Flex
            justify='space-between'
            wrap='wrap'
            style={{ rowGap: '10px', padding: '0px 50px 15px 50px' }}
          >
            <WeatherBigCard
              city={filteredCities[5].place}
              weatherData={filteredCities[5]}
            />
            <WeatherBigCard
              city={filteredCities[1].place}
              weatherData={filteredCities[1]}
            />
            <WeatherBigCard
              city={filteredCities[0].place}
              weatherData={filteredCities[0]}
            />
            <WeatherBigCard
              city={filteredCities[2].place}
              weatherData={filteredCities[2]}
            />
            <WeatherBigCard
              city={filteredCities[3].place}
              weatherData={filteredCities[3]}
            />
            <WeatherBigCard
              city={filteredCities[4].place}
              weatherData={filteredCities[4]}
            />
          </Flex>
        </Layout>
      )}
      <Marquee style={{ backgroundColor: 'white' }}>
        {weatherData?.map((city) => (
          <>
            <MarqueeItem
              key={city.place}
              city={city.place}
              temperature={city.temperature}
              weatherCondition={city.weather_condition}
              customIcons={customIcons}
            />
          </>
        ))}
      </Marquee>
    </>
  );
};
