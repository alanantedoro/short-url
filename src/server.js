import express from "express";
import indexRouting from "./Routes/indexRouting.js";
import { serverPort } from "./Config/config.js";

const app = express();

app.use(express.json());

app.use(indexRouting);

// app.use((req, res, next) => {});

//Server init y error.
app.listen(serverPort, () => {
  console.log(`Server running OK.`);
});
app.on("error", (error) => console.log("Error: ", error));
