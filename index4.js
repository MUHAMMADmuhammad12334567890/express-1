import express from "express";
const app = express()
const port = 3000;

app.get("/admin", (req, res) => {
  res.send("не хватает прав доступа");
}),
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
