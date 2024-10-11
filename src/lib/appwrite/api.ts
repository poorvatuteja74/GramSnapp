import { error } from "console";
import { INewUser } from "../../types";
import { account, appwriteConfig, avatars, databases } from "./config"; // Ensure this is correctly set up
import { ID } from 'appwrite';
import { Url, URL } from "url";

export async function createUserAccount(user: INewUser) {
    try {
        // Check if user object contains necessary properties
        if (!user.password || !user.email || !user.name) {
            throw new Error("User information is incomplete.");
        }

        const newAccount = await account.create(
            ID.unique(),
            user.email,  // Ensure the email is first
            user.password, // Password comes second
            user.name // Name is last
        );

        if(!newAccount) throw Error;
        const avatarURL = avatars.getInitials(user.name);
        const newUser = await saveUserToDB({

            accountId: newAccount.$id,
            name: newAccount.name, 
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarURL,
    

        })

        return newAccount;
        
    } catch (error) {
        console.error("Error creating user account:", error);
        throw error; // Rethrow the error after logging it
    }
}

export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username? :string;
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )

        return newUser;
        
    } catch (error) {

        console.log(error);
        
    }
    
}

export async function signInAccount(user:{
    email: string;
    password: string
}) {
    try {
        const session = await account.createEmailPasswordSession(user.email, user.password);

        return session;
        
    } catch (error) {

        console.log(error)
        
    }
    
}
