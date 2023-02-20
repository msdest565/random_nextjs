// ./components/layout/index.tsx
import { FC } from "react";
import { INavBarProps, NavBar } from "../navbar/index";
import { ItagListProps, TagList } from "../taglist/index";
import styles from "./styles.module.scss";

export interface ILayoutProps {
  taglistData: ItagListProps;
  navbarData: INavBarProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  taglistData,
  navbarData,
  children,
}) => {
  return (
    <div className={styles.background}>
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <TagList {...taglistData} />
      <main className={styles.main}>{children}</main>
    </div>
    </div>
  );
};