require('dotenv').config()
require('express-async-errors')
// express

const express = require('express')
const app = express()

// rest of the packages
const morgan = require('morgan')

// internal
const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

///////////////////////////////////////////////////////
// MIDDLEWARES & ROUTES
///////////////////////////////////////////////////////

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Hello')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

///////////////////////////////////////////////////////
// START SERVER
///////////////////////////////////////////////////////

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
