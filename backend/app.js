import express from "express";

const app = express();

app.get("/Home", (req, res) => {
    res.status(200).json({message: "Home page"});
});

app.use((req, res) => {
    res.status(200);
    res.json({ message: "hello TEAM"});
});

export default app;