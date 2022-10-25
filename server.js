const express = require("express") 
const pokemon = require("./models/pokemon")
const app = express()
const PORT = 3000
const methodOverride = require("method-override")

app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

// Index New Delete Update Create Edit Show


// app.get('/', (req, res) => {
//     res.send('Home page')
// })

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemons:pokemon,
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/pokemon', (req, res) => {
    console.log(req.body)
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
    }
    let createdPokemon = {
        name: req.body.name, 
        type: req.body.type,
        img: req.body.img,
        stats: stats,
    }
    pokemon.push(createdPokemon)        //! adding 'new' pokemon into list of pokemon.js
    res.redirect('/pokemon')
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