require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req, res) => {
    res.send("you are in twitter")
})

app.get('/login' , (req, res) => {
    res.send('<h1> please login at chai aur code</h1>')
})
// when ever we modify the code we have to restart the application


app.get('/youtube', (req, res) => {
    res.send('<h2>chai or code</h2>')
} )

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
}) 