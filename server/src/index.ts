import express from "express";
import authRoutes from "./routes/auth";
import subsRoutes from "./routes/subs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

mongoose.set("strictQuery", false);

mongoose
.connect(process.env.MONGO_URI as string)
.then(() => {
    console.log("Connected to mongodb");

    const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/subs", subsRoutes);

    app.listen(8081, () => {
        console.log(`Now listening to port 8081`);
    });
})
.catch((error) => {
    console.log({ error });
    throw new Error(error);
});