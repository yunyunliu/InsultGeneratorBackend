const express = require('express')
const cors = require('cors')
const { generateIndexes, encodeInsult, decodeId, buildInsult } = require('./helpers')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const name = req.body.name
  console.log(name)
  const indexes = generateIndexes()
  const insultId = generateInsultId(indexes)
  const hexId = parseInt(insultId, 16)  
  const genInsult = generateInsult(name,indexes)
  const numIdAgain = hexId.toString(16)
  res.json({ indexes, insult: genInsult, insultId, hexId, numIdAgain })
})

app.post('/:insultId', (req, res) => {

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
 