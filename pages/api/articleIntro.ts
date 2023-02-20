// ./pages/api/artical.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CMSDOMAIN } from '@/utils';

export interface IArticleIntro {
  title: string;
  abstract: string;
  articleId: number;
  writer_name: string;
  tag: string;
  time: string;
}

interface IArticleIntroProps {
  list: {   
    title: string;
    abstract: string;
    articleId: number;
    writer_name: string;
    tag: string; 
    time: string;
  };

}




export const getArticalIntroData = (
  req: NextApiRequest,
  res: NextApiResponse<IArticleIntroProps>
)  => {
  axios.get(`${CMSDOMAIN}/api/contents`).then(result => {
      const { articals } = result.data || {};
      
      res.status(200).json({
        list: articals.data.map((item: any) => {
          return {
            title: item.title,
            abstract: item.abstract,
            tag: item.tag,
            writer_name: item.writer_name,
            articleId: item.articleId,
            time: item.time,
          }
        })
      });
    });
};


export default getArticalIntroData;