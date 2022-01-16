const express = require('express')
const cors = require('cors')
const router = require('./Routers/index')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)

app.listen(PORT, ()=> {
    console.log(`listening at http://localhost:${PORT}`);
})