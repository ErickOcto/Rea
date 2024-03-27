import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteCofig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client()

client.setProject(appwriteCofig.projectId);
client.setEndpoint(appwriteCofig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);