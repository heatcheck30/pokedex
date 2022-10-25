const express = require("express") 
const pokemon = require("./models/pokemon")
const app = express()
const PORT = 3000

// Index New Delete Update Create Edit Show


app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemons:pokemon,
    })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemons:pokemon[req.params.id]     //! [req.params.id] is the specific pokemon.
                                            //! pokemon[]   specifying specific file and location
    })                                      //! : means whatever the user is inputting
                                            //! pokemons is the variable you've created
})






app.listen(PORT, () =>{
    console.log('listening...');
});