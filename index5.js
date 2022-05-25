import express from "express";

const app = express();

const port = 3000;

// 1
// app.get("/", (req, res) => {
//   res.json("Hello World");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// 2
// app.get("/users", (req, res) => {
//   res.json(["user1", "user2", "user3"]);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

//  3
// app.post("/users", (req, res) => {
//   res.json("юзер добавлен");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// 4

// app.delete("/users/:id", (req, res) => {
//   res.json(`юзер с ID :id удален`);

// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// 5


// app.patch("/users/:id", (req, res) => {
//     res.json(`юзер с ID :id изменен`);
  
//   });
  
//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });

// 6

app.get("/admin", (req, res) => {
    res.json('не хватает прав доступа');

  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

