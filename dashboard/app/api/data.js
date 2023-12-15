import { User } from "./Models";
import { connectToDatabase } from "./db";

export const fetchUsers = async() =>{
    try {
        connectToDatabase();
        const users = await User.find();
        return users
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users");
    }
}