const express = require('express')
const { generateInsult } = require('./helpers')
const app = express()

app.get('/', (req, res) => {
  const insult = generateInsult()
  res.send(insult)  
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
