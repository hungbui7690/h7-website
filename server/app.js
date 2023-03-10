require('dotenv').config()
require('express-async-errors')
// express

const express = require('express')
const app = express()

// rest of the packages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')

// internal
const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const uploadImageRoutes = require('./routes/uploadImage')
const postRoutes = require('./routes/postRoutes')

///////////////////////////////////////////////////////
// MIDDLEWARE & ROUTES
///////////////////////////////////////////////////////

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

app.get('/', (req, res) => {
  res.send(`<h1>My Website API</h1>`)
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/upload', uploadImageRoutes)
app.use('/api/v1/posts', postRoutes)

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
