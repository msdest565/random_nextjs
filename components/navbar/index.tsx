// ./components/navbar/index.tsx
import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logo1 from "@/public/logo1.svg";

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
  return (
    <div className={styles.navBar}>
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
    </div>
  );
};