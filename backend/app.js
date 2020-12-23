import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/Home", (req, res) => {
    res.status(200).json({message: "Home page"});
});

app.post("/Home", (req, res) => {
    res.status(200).json({message: "Home page post method"});
});

app.use((req, res) => {
    res.status(200);
    res.json({ message: "hello TEAM"});
});

export default app;