import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/images/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";
type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "Ашхабад", label: "Ашхабад" },
    { value: "Ахал", label: "Ахал" },
    { value: "Балкан", label: "Балкан" },
    { value: "Дашогуз", label: "Дашогуз" },
    { value: "Лебап", label: "Лебап" },
    { value: "Мары", label: "Мары" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgb(71,147,255, 20%)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};
