import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Social } from "../../typings";

const URLSearchParams = groq`
*[_type == "social"]
`
type Data={
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: Social[] = await sanityClient.fetch(URLSearchParams);
    res.status(200).json({ socials })
  }