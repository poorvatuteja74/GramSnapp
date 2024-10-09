import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteconfig = () => {
  return {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
  }
}

export const client = new Client();

const config = appwriteconfig(); // Call the function to get the config object
client.setProject(config.projectId); // Access properties from the config object
client.setEndpoint(config.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
