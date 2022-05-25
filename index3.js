import express from "express";

const app = express();
const port = 3000;

app.post("/users", (req, res) => {
  res.send("Юзер добавлен");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});