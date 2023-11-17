import Marquee from 'react-fast-marquee';
import { MarqueeItem, Title, WeatherCard } from '../components';
import { useWeatherData } from '../hooks/useWeatherData';
import { customIcons } from '../utils/customIcons';
import { useVideoData } from '../hooks/useVideoData';
import './style.css';

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
  const videoData = useVideoData();

  const filteredCities = weatherData?.filter((city: { place: string }) =>
    cities.includes(city.place)
  );

  return (
    <div className='mainLayout'>
      {filteredCities && (
        <div>
          <Title />
          <video
            className='mainVideo'
            key={videoData?.[0].filename}
            autoPlay
            loop
            muted
          >
            <source src={`/${videoData?.[0].filename}.mp4`} type='video/mp4' />
          </video>
          <div className='mainWrapper'>
            <WeatherCard
              city={filteredCities[0].place}
              weatherData={filteredCities[0]}
            />
            <WeatherCard
              city={filteredCities[1].place}
              weatherData={filteredCities[1]}
            />
            <WeatherCard
              city={filteredCities[5].place}
              weatherData={filteredCities[5]}
            />
            <WeatherCard
              city={filteredCities[2].place}
              weatherData={filteredCities[2]}
            />
            <WeatherCard
              city={filteredCities[4].place}
              weatherData={filteredCities[4]}
            />
            <WeatherCard
              city={filteredCities[3].place}
              weatherData={filteredCities[3]}
            />
          </div>
        </div>
      )}
      <Marquee>
        {weatherData?.map((city) => (
          <MarqueeItem
            key={`${city.id}-${city.place}`}
            city={city.place}
            temperature={city.temperature}
            weatherCondition={city.weather_condition}
            customIcons={customIcons}
          />
        ))}
      </Marquee>
    </div>
  );
};
