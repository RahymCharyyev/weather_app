import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import { Day } from "./Days";
import s from "./Days.module.scss";
type Props = {
  day: Day;
};

export const Card = ({ day }: Props) => {
  const { day_num, day_info, icon_id, temp_day, temp_night, info } = day;
  return (
    <div className={s.card}>
      <div className={s.day}>{day_num}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};
