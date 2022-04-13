import express from 'express'
import hbs from 'hbs'
import path from 'path'

const app = express()
const __dirname = path.resolve()

app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.set('views', `${__dirname}/src/views`)

app.get('/', (req, res) => res.render('home'))

const server = app.listen(80, () => console.log(`Server listening on localhost:${server.address().port}`))
