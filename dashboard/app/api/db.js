import mongoose from "mongoose";

const connections = {};
export const connectToDatabase = async () => {
  try {
    if (connections.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URL);
    connections.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
