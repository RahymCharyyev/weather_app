import clearDay from '../assets/clear-day.svg';
import clearNight from '../assets/clear-night.svg';
import fewCloudsDay from '../assets/overcast-day.svg';
import fewCloudsNight from '../assets/overcast.svg';
import scatteredCloudsDay from '../assets/partly-cloudy-day.svg';
import scatteredCloudsNight from '../assets/partly-cloudy-night.svg';
import rain from '../assets/rain.svg';
import lightRainDay from '../assets/partly-cloudy-day-rain.svg';
import lightRainNight from '../assets/partly-cloudy-night-rain.svg';
import thunderstormDay from '../assets/thunderstorms-day.svg';
import thunderstormNight from '../assets/thunderstorms-night.svg';
import snowDay from '../assets/snow.svg';
import snowNight from '../assets/partly-cloudy-night-snow.svg';
import mist from '../assets/mist.svg';

type CustomIcons = {
  [key: string]: string;
};

export const customIcons: CustomIcons = {
  '01d': clearDay,
  '01n': clearNight,
  '02d': fewCloudsDay,
  '02n': fewCloudsNight,
  '03d': scatteredCloudsDay,
  '03n': scatteredCloudsNight,
  '04d': fewCloudsDay,
  '04n': fewCloudsNight,
  '09d': rain,
  '09n': rain,
  '10d': lightRainDay,
  '10n': lightRainNight,
  '11d': thunderstormDay,
  '11n': thunderstormNight,
  '13d': snowDay,
  '13n': snowNight,
  '50d': mist,
  '50n': mist,
};
