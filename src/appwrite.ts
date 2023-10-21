import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)

export const account = new Account(client);