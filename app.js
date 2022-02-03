const express = require("express")
const app = express()
const routes = require("./src/routes")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => res.send("Server Iniciado..."))

//PERMITINDO CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


app.use("/startups", routes.startups)

app.listen(4000, () => {
    console.log("Rodando na porta 4000...")
})
