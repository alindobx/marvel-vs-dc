const axios = require('axios');
const express = require('express');
const {get} = require('axios')
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.post('/api/marvel', async (req,res) =>{
    const { character } = req.body
    const param = `https://gateway.marvel.com/v1/public/characters?name=${character}&apikey=6575891e6f2efe85ab169d31533ed059&hash=a2ead6131abed97461009da0b721576a&ts=1669787724371`;
    const response = await axios.get(param)

    console.log(character)
    console.log(response.data.data.results[0])
    return res.status(200).json({
        results : response.data.data.results[0]
    })
})


app.post('/api/dc', async (req,res) =>{
    const { character } = req.body
    const param = `https://www.superheroapi.com/api.php/10219338197519207/search/${character}`;
    const response = await axios.get(param)
    console.log("dc character",character)
    console.log("dc response",response.data)
    return res.json({ results : response.data})
})

const port = 8080;
app.listen(port, ()=> console.log('server started'))
