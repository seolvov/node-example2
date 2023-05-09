import express from "express"

const router = express.Router()

// console.log("WOW")
router.get("/all", (req, res) => {
    res.json({
        msg: "all !!!!!!!"
    })
})
router.post("/create", (req, res) => {
    const userInput = {
        name: req.body.proName,
        price: req.body.proPrice,
        stock: req.body.proStock
    }
    res.json({
        msg: "create !!!!!!!",
        product: userInput
    })
})
router.put("/update", (req, res) => {
    res.json({
        msg: "update !!!!!!!"
    })
})
router.delete("/delete", (req, res) => {
    res.json({
        msg: "delete !!!!!!!"
    })
})

export default router