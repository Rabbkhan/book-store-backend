
import dotenv from 'dotenv';
dotenv.config();
export const mongoDBURL = process.env.MONGODB_URL;
export const PORT = process.env.PORT;

