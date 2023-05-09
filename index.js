import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";

import productRoute from "./routes/product.js";

const app = express()
const port = 8080

//middleware
app.use(cors()) //외부 api 접근 허용
app.use(morgan('dev')) //terminal 에 log 남김
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: false}))

app.use("/product", productRoute)

app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})
app.listen(port, console.log("server started"))