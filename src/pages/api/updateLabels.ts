import { NextApiRequest, NextApiResponse } from 'next';
const sdk = require('node-appwrite');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new sdk.Client();
  const users = new sdk.Users(client);

  client
    .setEndpoint(process.env.ENDPOINT!)
    .setProject(process.env.PROJECT_ID!)
    .setKey(process.env.API_KEY);

  const {id} = req.body;

  try {
    const response = await users.updateLabels(id, ['subscriber']);
    res.status(200).json({ message: 'User labels updated successfully', data: response });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user labels', error: error });
  }
};