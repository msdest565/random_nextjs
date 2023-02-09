// ./pages/api/layout.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ILayoutProps } from "../../components/layout";
import { CMSDOMAIN } from "@/utils";
import { isEmpty } from "lodash";

const getLayoutData = (
  req: NextApiRequest,
  res: NextApiResponse<ILayoutProps>
) => {
  axios.get(`${CMSDOMAIN}/api/layouts`).then((result) => {
    const {
      labels,
      tags,
    } = result.data || {};

    res.status(200).json({
      navbarData: {
        LabelList: labels?.data?.map((item: any) => {
          return {
            label: item.label,
            link: isEmpty(item.link) ? "" : item.link,
          };
        }),
      },
      taglistData: {
        tagList: tags?.data?.map((tagitem: any) => {
          return {
            tagname: tagitem.tagname,
            taglink: isEmpty(tagitem.taglink) ? "" : tagitem.taglink,
          }
        })
      },
    });
  });
};

export default getLayoutData;