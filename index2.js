import express from "express";
// import res from "express/lib/response";

const app = express()
const port = 3000
// const b = ["users", "users1", "users2", "users3"]

app.get("/", (req, res) => {
    res.json( ["users1", "users2", "users3"])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
