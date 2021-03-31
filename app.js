const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Restaurant = require('./models/restaurants')

const routes = require('./routes')
const hbsHelpers = require('./utils/hbsHelpers')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine(
  'hbs',
  exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: hbsHelpers })
)
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
