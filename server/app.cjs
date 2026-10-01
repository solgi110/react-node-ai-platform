const { dirname } = require('node:path')
const { fileURLTopath } = require('node:url')
const server = require('node:http').createServer()
const express = require('express')
const app = express()
const cors = require('cors')



// const OpenAi = require('openai')
// const client = new openAi()
// const fileName = fileURLTopath(import.meta.url)
//  const dirName = dirname(fileName)
//  console.log(fileName);

app.use(express.json())
app.use(cors())

app.post('/openai', (req, res) => {
  console.log(req.body.text);
  console.log('data is here');


})

// Ai is comming baby !

app.listen(8080, () => {
  console.log('server is runing Now ..');
})