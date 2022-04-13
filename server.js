import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('hello world!!'))

const server = app.listen(80, () => console.log(`Server listening on localhost:${server.address().port}`))
