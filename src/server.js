const express = require("express")
const app = express()
const { router } = require("./routes")

app.use(express.json())
app.use(router)

app.listen(3003, () => {
  console.log("Serving is running")
})