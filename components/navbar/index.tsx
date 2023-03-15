// ./components/navbar/index.tsx
import { FC, useContext } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logo1 from "@/public/logo1.svg";
import { ThemeContext } from "@/stores/theme";
import { Themes } from "@/constants/enum";

interface ILabel {
  label: string;
  link: string;
}


export interface INavBarProps {
  LabelList: ILabel[];
}

export const NavBar: FC<INavBarProps> = ({

  LabelList,
}) => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className={styles.navBar}>
      <nav className={styles.navBarList}>
      <a href="http://localhost:3000/" className={styles.logoa}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <Image src={logo1} alt="logo1" className={styles.logo1} />
      </a>
    <ul className={styles.navList}>
      {LabelList?.map((item,index) => {
        return (
          <li className={styles.navListLi} key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        )
      })}
    </ul>
    </nav>
      <div
        className={styles.themeicon}
        onClick={(): void => {
          if (localStorage.getItem("theme") === Themes.light) {
            setTheme(Themes.dark);
          } else {
            setTheme(Themes.light);
          }
        }}
      ></div>
    </div>
  );
};