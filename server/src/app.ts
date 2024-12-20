import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("API Running");
});

async function run() {
  try {
    const clientOptions = {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    };
    await mongoose.connect(
      process.env.MONGO_URI as string,
      clientOptions as ConnectOptions
    );
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.listen("8080", () => {
      console.log(`
      
      🛡️  Server listening on port: 8080 🛡️
      
    `);
    });
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
