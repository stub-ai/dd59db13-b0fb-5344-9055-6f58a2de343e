import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  // Validate and authenticate user here
  // If successful, return user data
  // If not, return error
  res.status(200).json({ user: { email } });
}