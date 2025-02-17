import express from "express"
const app = express()
const port = process.env.PORT||1000

app.get('/', (req, res) => {
    console.log(req.ip);
  res.send('Hello Laiba Qazi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//  192.168.228.23:1000