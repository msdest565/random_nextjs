import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CMSDOMAIN } from '@/utils';

export interface IWriter {
  name: string;
  self_introduce: string;
}

interface IWriterProps {
  writerList: {
    name: string;
    self_introduce: string;
  }
}

const getHomeData = (req: NextApiRequest, res: NextApiResponse<IWriterProps>): void => {
  axios.get(`${CMSDOMAIN}/api/writer-lists`).then(result => {
    const { writers } = result.data || {};

    res.status(200).json({
      writerList: writers.data.map((item: any) => {
        return {
          name: item.name,
          self_introduce: item.self_introduce,
        }
      })
    });
  });
};

export default getHomeData;
