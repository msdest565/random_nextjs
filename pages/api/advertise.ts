import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CMSDOMAIN } from '@/utils';


export interface IAdvertise {
  advertise: string;
}


interface IAdvertiseProps {
  advertiselist: {
    advertise: string;
  }
}

const getAdvertiseData = (req: NextApiRequest, res: NextApiResponse<IAdvertiseProps>) => {
  axios.get(`${CMSDOMAIN}/api/advertise-lists`).then(result => {
    const { advertises, advertise } = result.data || {};

    res.status(200).json({
      advertiselist: advertises.data.map((item:any) => {
        return {
          advertise: `${CMSDOMAIN}${item.advertise.data.formats.thumbnail.url}`
        }
      })
        
      
      })
  });
}


export default getAdvertiseData;
