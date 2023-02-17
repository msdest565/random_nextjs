<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
=======
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
>>>>>>> 3f80defba1e300d2adb7c0ce8d4b57a85b99becf
  name: string
}

export default function handler(
  req: NextApiRequest,
<<<<<<< HEAD
  res: NextApiResponse<Data>,
=======
  res: NextApiResponse<Data>
>>>>>>> 3f80defba1e300d2adb7c0ce8d4b57a85b99becf
) {
  res.status(200).json({ name: 'John Doe' })
}
