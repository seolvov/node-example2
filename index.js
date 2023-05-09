import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()
const port = 8080

//middleware
app.use(cors()) //외부 api 접근 허용
app.use(morgan('dev')) //terminal 에 log wkrtjd

app.get("/test", (req, res) => {
    res.json({
        msg: "test api"
    })
})
app.listen(port, console.log("server started"))