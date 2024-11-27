import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB is connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/blog`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
