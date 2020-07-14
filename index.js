const express = require('express')
const cors = require('cors')
const { generateInsult, generateTypeAndIndexes } = require('./helpers')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const name = req.body.name
  console.log(name)
  const indexes = generateTypeAndIndexes()
  const genInsult = generateInsult(name,indexes)
  res.json({ indexes, insult: genInsult })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
 