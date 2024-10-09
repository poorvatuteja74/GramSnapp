import { INewUser } from "../../types";
import { account } from "./config"; // Ensure this is correctly set up
import { ID } from 'appwrite';

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

        return newAccount;
        
    } catch (error) {
        console.error("Error creating user account:", error);
        throw error; // Rethrow the error after logging it
    }
}
