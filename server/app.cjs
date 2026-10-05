const { dirname } = require('node:path')
const { fileURLTopath } = require('node:url')
const server = require('node:http').createServer()
const express = require('express')
const app = express()
const cors = require('cors')
const { default: openAiRequest } = require('./request')


// MeadelWare 
app.use(express.json())
app.use(cors())


// const OpenAi = require('openai')
// const client = new openAi()
// const fileName = fileURLTopath(import.meta.url)
//  const dirName = dirname(fileName)
//  console.log(fileName);


app.post('/openai', async (req, res) => {
  console.log(req.body.text);
  // console.log('data is here');
  const resultation = await openAiRequest(req.body.text)

  res.json({
    status: 200,
    data: resultation
  })

})


console.log('hello ');

const port = process.env.PORT || 8080

app.listen(port, "0.0.0.0", () => {


  console.log('server is runing on port =>', port);
})