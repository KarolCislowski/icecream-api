import express from 'express'
import cors from 'cors'

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

const iceCreams = [
  {
    id: 1,
    type: 'Vanilla'
  },
  {
    id: 2,
    type: 'Chocolate'
  },
  {
    id: 3,
    type: 'Strawberry'
  },
  {
    id: 4,
    type: 'Salted Caramel'
  }
]

// Start defining your routes here
app.get('/', (req, res) => {
  res.json(iceCreams)
})

app.get('/:id', (req, res) => {
  res.json(iceCreams.find(e => e.id === parseInt(req.params.id)))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
