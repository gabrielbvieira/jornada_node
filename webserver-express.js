const express = require('express');

const server = express();
const port = 3000;

var players = []
var ID = 1;

const idGenerator = () => {
    ID++;
    return ID;
}

server.use(express.json());

/*function resultSuccess(msg) {
    const body = {
        updatedAt: new Date(),
        message: msg
    }
    return body;
}*/

server.get('/', (req,res) => {
    const body = {
            message: 'Server ok'
    };
    res.status(200).send(body);
})

server.post('/player', (req, res) => {
    try {
        //destructuring
        const {name, age} = req.body;

        const newPlayer = {
            id: idGenerator(),
            name:name,
            age:age
        }

        players.push(newPlayer);

        const bodyOK={
            message:'Player created',
            player:newPlayer
        }

        res.status(201).send(bodyOK);
    }
    catch(err) {
        res.status(500).send(err)
    }
});

function getplayer(id) {
    const selected = players.filter(item => item.id == id)
    return selected[0]
}

function getplayerexcept(id) {
    const selected = players.filter(item => item.id != id)
    return selected
}

//rout param
server.get('/player/:id', (req, res) => {
    const id = req.params.id
    player = getplayer(id)

    res.status(200).send(player);
})

server.put('/player/:id', (req, res) => {
    const {name, age} = req.body;
    const id = req.params.id
    player = getplayer(id)

    player.name = name;
    player.age = age;

    res.status(200).send('updated');
})

server.delete('/player/:id', (req, res) => {
    const newPlayers = getplayerexcept(req.params.id);
    players = newPlayers;
    res.status(200).send('removed')
})

server.get('/player', (req, res) => {
    const body = {
        players: players
    };

    res.status(200).send(body);
})

server.listen(port, () => {
    console.log('server running')
})

/*
crud
1 endpoint que permita passar uma parte da palavra e retorna a lista de indivíduos que tem essa parte
*/