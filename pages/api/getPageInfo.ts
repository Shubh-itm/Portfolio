import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

const URLSearchParams = groq`
*[_type == "pageInfo"][0]
`;

type Data={
    pageInfo: PageInfo;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageInfo: PageInfo = await sanityClient.fetch(URLSearchParams);
    res.status(200).json({ pageInfo });
  }