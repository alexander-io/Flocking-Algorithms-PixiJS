let express = require('express')
let  app = express()

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(8080, () => {
  console.log('listening for requests on port 8080')
})
