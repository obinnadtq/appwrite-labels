import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)

export const account = new Account(client);


export const getUserObject = () => {
  const sdk = require('node-appwrite');
  const client = new sdk.Client();

  const users = new sdk.Users(client);

  client
  .setEndpoint(process.env.ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)
  .setKey(process.env.API_KEY);

  return users;

}