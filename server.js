const express = require('express');
const loginRouter = require('./routes/loginRouter');
const app = express();
require('dotenv/config');
const port = process.env.PORT;
const server_name = process.env.SERVER_NAME
app.use(express.json());

var players = [];

app.use('/test', (req, res, next) => {
    const data = new Date();
    const hora = data.getHours();
    console.log(hora);
    if (hora <= 15)
        next();
    else {
        res.status(503).send('Acesso bloqueado depois das 13');
    }
});

app.use(loginRouter);

app.post('/create-player', (req, res) => {
    const name = req.body.name;
    players.push(name);
    console.log(players);
    res.send('Criado com sucesso');
});

app.listen(port, () => {
    console.log(`${server_name} no ar!\nUtilizando a porta: ${port}`)
});