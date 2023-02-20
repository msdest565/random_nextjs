import { FC } from "react";
import styles from "./styles.module.scss";






interface Itag {
    tagname: string;
    taglink: string;
}


export interface ItagListProps {
    tagList: Itag[];
}




export const TagList: FC<ItagListProps> = ({
    tagList,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.viewline}>
        <nav className={styles.tagNavBar}>
            <ul className={styles.tagitem}>
            {tagList?.map((item,index) => {
                return (
                    <li className={styles.tag} key={item.tagname}><a href={item.taglink} className={styles.tag_color}>{item.tagname}</a></li> 
                )
            })}
            </ul>
        </nav>  
        </div>
        </div>     
    );
};