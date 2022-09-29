const express = require("express")

const PORT = 3000

const app = express()

app.use("/", (req, res) => {
    res.json({ success: true })
})

app.listen(PORT, () => {
    console.log(`Backend server port: ${PORT}`)
})
