const express = require('express')
const cors = require('cors')
const { generateIndexes, generateId, encodeId, decodeId, buildInsult, formatName } = require('./helpers')
const { handleText } = require('./handleText.js')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/yunyun/Downloads/tts-key.json'
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)

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

app.post('/speak', async (req, res) => {
  const audioData = await handleText(req, res)
  res.send(audioData)
})

app.get('/insult', (req, res) => {
  if (req.query.name === undefined) {
    res.send('no query string')
  } else {
    const { name, id } = req.query
    console.log(req.query)
    const decodedId = decodeId(id)
    const formatted = formatName(name)
    const insult = buildInsult(formatted, decodedId)
    res.send({ insult, formatted })
  }
})

const PORT = process.env.PORT ||3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
 