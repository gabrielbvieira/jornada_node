const players = ['Allan', 'Gabriel', 'Fernando'];

//foreach
players.forEach((player) => {
    console.log(player)
});

const filtered = players.filter(player=>player.includes('n'))

/*const filtered = players.filter((player) => {
    return player.includes('n');
});*/

console.log(filtered)