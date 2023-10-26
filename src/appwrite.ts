import { Account, Client, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)

export const storage = new Storage(client);

export const account = new Account(client);