import express from "express";
// import res from "express/lib/response";
 
const app = express()
const port = 3000

app.get("/", (req, res)=> {
    res.json({
        city: "Самашки",
        number: 89226661313,
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})