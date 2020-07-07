const express = require('express')
const cors = require('cors')
const { generateInsult } = require('./helpers')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const name = req.body.name
  console.log(name)
  const insult = generateInsult(name)
  res.json(insult)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
