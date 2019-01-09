let express = require('express')
let  app = express()

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/pixi.js', (req,res) => {
  res.sendFile(__dirname + '/node_modules/pixi.js/dist/pixi.min.js')
})

app.listen(8080, () => {
  console.log('listening for requests on port 8080')
})
