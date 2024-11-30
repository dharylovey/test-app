import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello world',
    succces: true
  })
})

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
)
