import { Weather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

var time = new Date();
let date =
  ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);
export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <div>
          {weather.weather.map((weather) => (
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt={weather.description}
            />
          ))}
        </div>
      </div>
      <div className={s.bottom_block}>
        <div>
          {weather.weather.map((weather) => (
            <div className={s.this_description}>{weather.description}</div>
          ))}
        </div>
        <div className={s.this_time}>
          Время: <span>{date}</span>
        </div>
        <div className={s.this_city}>
          Город: <span>Ашхабад</span>
        </div>
      </div>
    </div>
  );
};
