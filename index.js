const express = require('express')
const cors = require('cors')
const { generateIndexes, generateId, encodeId, decodeId, buildInsult, formatName } = require('./helpers')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  const name = req.body.name
  if (name) {
    const formatted = formatName(name)
    const indexes = generateIndexes()
    const insultId = generateId(indexes)
    const hexId = encodeId(insultId)
    const genInsult = buildInsult(formatted, insultId)
    res.json({ insult: genInsult, hexId })
  } else {
    res.send('no name given')
  }
})

app.post('/:insultId', (req, res) => {

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
 