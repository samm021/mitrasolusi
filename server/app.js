const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(router)
app.use(errorHandler)

app.listen(port, _=> console.log(`listening on port: ${port}`))