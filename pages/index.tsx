// ./pages/index.tsx
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import styles from './index.module.scss';
import cName from 'classnames';
import axios from 'axios';
import { LOCALDOMAIN } from '@/utils';
import { IArticleIntro } from './api/articleIntro';
import { IWriter } from './api/writer';
import App from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  writerList: {
    itemlist: {
      map(arg0: (_item: any) => JSX.Element): React.ReactNode;
      name: string;
      self_introduce: string;
    }
  }
  articles: {
  list: {
    title: string;
    abstract: string;
    articleId: number;
    writer_name: string;
    tag: string;
    time: TimeRanges;
  }[];
  total:number;
}
}

const Home: NextPage<IProps> = ({ writerList, articles }) => {
  const [content, setContent] = useState(articles);
  const mainRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
                {articles.list?.map((item: any) => {
                        return (
                          <div className={styles.ulstyle}>
                            <li className={styles.artical_item} key={item.title}>
                                <div className={styles.artical_container}>
                                <ul className={styles.item_container}>
                                    <li className={styles.writer_item}>作者：{item.writer_name}</li>
                                    <li className={styles.time_item}>时间：{item.time}</li>
                                    <li className={styles.tag_item}>{item.tag}</li>
                                </ul>
                                  <div className={styles.title_item}>
                                    <div className={styles.anothercontainer}>
                                    <a href={item.link} className={styles.title}>{item.title}</a>
                                    <div className={styles.abstract_container}>
                                      <a href={item.link} className={styles.abstract}>
                                    <div className={styles.abstract_div}>{item.abstract}</div>
                                      </a>
                                     </div>
                                     </div>
                                  </div>
                                </div>
                            </li>
                            </div>    
                                )
                            })}   
                </div>
            </div>
              <div className={styles.advertise}>
                            <img src="http://127.0.0.1:1337/uploads/thumbnail_QQ_20230216131343_6ae109f057.png" alt="广告"/>
              </div>
              <div className={styles.writer_block}>
                <nav className={styles.bangdan}>作者榜</nav>

                      {writerList.itemlist?.map((_item: any) => {
                        return (
                          <div className={styles.writerlistcontainer}>
                          <div className={styles.writers_list_item}>作者名：{_item.name}</div>
                          <div className={styles.writer_intro}>自我介绍：{_item.self_introduce}</div>
                          </div>
                        )
                      })}
              </div>           
        </div>
  );
};

Home.getInitialProps = async (context): Promise<IProps> => {
  const { data: writerData } = await axios.get(`${LOCALDOMAIN}/api/writer`);
  const { data: articleData } = await axios.post(`${LOCALDOMAIN}/api/articleIntro`, );

  return {
    writerList: {
      itemlist: writerData.writerList.map((_item: IWriter) => ({
      name: _item.name,
      self_introduce: _item.self_introduce,
      })),
      },
    articles: {
      list: articleData.list.map((item: IArticleIntro) => ({
        title: item.title,
        abstract: item.abstract,
        articleId: item.articleId,
        writer_name: item.writer_name,
        tag: item.tag,
        time: item.time,
        link: `${LOCALDOMAIN}/article/${item.articleId}`,
      })),
      total: articleData.total,
    },
  };
};
export default Home;