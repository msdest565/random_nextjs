import { FC } from "react";
import styles from "./styles.module.scss";
import { LOCALDOMAIN } from "@/utils";
import App, { AppContext } from "next/app";
import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getArticalData from "@/pages/api/artical_info";



interface Iartical {
    title: string;
    abstract: string;
    content: string;
    tag: string;
    writer_name: string;
}




export interface IArticalProps {
    ArticalList: Iartical[];
}



export const ArticalLine: FC<IArticalProps> = ({
    ArticalList
}) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.list_header}>
                <nav className={styles.nav_list}>
                    <ul className={styles.head_list}>
                        <li className={styles.nav_item}>
                            推荐
                        </li>
                        <li className={styles.nav_item}>
                            最新
                        </li>
                        <li className={styles.nav_item}>
                            热榜
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.artical_line}>
                <div className={styles.entry_list}>
                {ArticalList?.map((item,index) => {
                        return (
                            <li className={styles.artical_item}>
                                <div className={styles.item_container}>
                                    <div className={styles.name_item}>
                                        {item.writer_name}
                                    </div>
                                    <div className={styles.time_item}>
                                        <span>几天前</span>
                                    </div>
                                    <div className={styles.tag_item}>
                                        {item.tag}
                                    </div>
                                </div>
                                <div className={styles.artical_container}>
                                        <div className={styles.title_item}>
                                            <a href="" className={styles.title}>{item.title}</a>
                                        </div>
                                </div>
                                <div className={styles.abstract_container}>
                                    <a href="" className={styles.abstract}>
                                        <div className={styles.abstract_div}>{item.abstract}</div>
                                        </a>
                                </div>
                            </li>    
                                )
                            })}   
                </div>
            </div>
                       
        </div>
    );
};
