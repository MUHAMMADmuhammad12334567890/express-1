import express from "express"  // импорты
// import res from "express/lib/response"

const app = express() // создаем переменную app вызвав express()
const port = 3000

app.get("/", (req, res) => { //настраиваем роуты
    res.send("INTOCODE")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`) // пускаем сервер с помощью app.listen()
})