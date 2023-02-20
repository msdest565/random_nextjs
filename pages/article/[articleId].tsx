// ./pages/article/[articleId].tsx
import { LOCALDOMAIN } from '@/utils';
import axios from 'axios';
import React from 'react';
import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const showdown = require('showdown');

export interface IArticleProps {
  title: string;
  author: string;
  description: string;
  createTime: string;
  content: string;
}

const Article: NextPage<IArticleProps> = ({ title, author, description, createTime, content }) => {
  const converter = new showdown.Converter();
  return (

      <div className={styles.article_container}>
        <div className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        作者：{author} | 创建时间: {createTime}
      </div>
      <div className={styles.description}>{description}</div>
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} className={styles.content} />
        </div>
      </div>

  );
};



export const getServerSideProps: GetServerSideProps = async context => {
  const { articleId } = context.query;
  const { data } = await axios.get(`${LOCALDOMAIN}/api/articleInfo`, {
    params: {
      articleId,
    },
  });
  return {
    props: data, // 需要拿props包裹
  };
};



export default Article;
