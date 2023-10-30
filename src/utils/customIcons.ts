import clearDay from '../assets/clear-day.svg';
import fewCloudsDay from '../assets/overcast-day.svg';
import fewCloudsNight from '../assets/overcast.svg';
import scatteredCloudsDay from '../assets/partly-cloudy-day.svg';
import scatteredCloudsNight from '../assets/partly-cloudy-night.svg';
import overcast from '../assets/overcast.svg';
import rain from '../assets/rain.svg';
import lightRainDay from '../assets/partly-cloudy-day-rain.svg';
import lightRainNight from '../assets/partly-cloudy-night-rain.svg';
import thunderstormDay from '../assets/thunderstorms-day.svg';
import thunderstormNight from '../assets/thunderstorms-night.svg';
import snowNight from '../assets/partly-cloudy-night-snow.svg';
import thunderstormRainDay from '../assets/thunderstorms-extreme-rain.svg';
import thunderstormRainNight from '../assets/thunderstorms-night-extreme-rain.svg';
import snowRainDay from '../assets/sleet.svg';
import lightSnowDay from '../assets/overcast-day-snow.svg';
import lightSnowNight from '../assets/overcast-night-snow.svg';
import lightSnowRainDay from '../assets/partly-cloudy-day-sleet.svg';

export type CustomIcons = {
  [key: string]: string;
};

export const customIcons: CustomIcons = {
  'Açyk gündiz': clearDay,
  'Az bulutly gündiz': fewCloudsDay,
  'Az bulutly gije': fewCloudsNight,
  'Üýtgäp durýan bulutly gündiz': scatteredCloudsDay,
  'Üýtgäp durýan bulutly gije': scatteredCloudsNight,
  'Az-kem bulutly gündiz': fewCloudsDay,
  'Az-kem bulutly gije': fewCloudsNight,
  'Bulutly gündiz': overcast,
  'Bulutly gije': overcast,
  'Ýagyş gündiz': rain,
  'Ýagyş gije': rain,
  'Az-kem ýagyş gündiz': lightRainDay,
  'Az-kem ýagyş gije': lightRainNight,
  'Az-kem ýagyş, ýyldyrym gündiz': thunderstormDay,
  'Az-kem ýagyş, ýyldyrym gije': thunderstormNight,
  'Ýagyş, ýyldyrym gündiz': thunderstormRainDay,
  'Ýagyş, ýyldyrym gije': thunderstormRainNight,
  'Gar gatyşykly ýagyş gündiz': snowRainDay,
  'Gar gatyşykly ýagyş gije': lightRainNight,
  'Az-kem gar gündiz': lightSnowDay,
  'Az-kem gar gije': lightSnowNight,
  'Az-kem gar gatyşykly ýagyş gündiz': lightSnowRainDay,
  'Gar gije': snowNight,
};
