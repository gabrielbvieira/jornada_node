const players = [
    {
        id: 1,
        name: 'Gabriel',
        lastname: 'Vieira',
        age: 26
    },
    {
        id: 2,
        name: 'Allan',
        lastname: 'Ferreira',
        age: 40
    }
];

players.forEach((item) => {
    console.log(item.name);
})

const allan = players.filter(item => item.id===1);
console.log(allan);

//map - paradigma funcional
const lastnames = players.map((item) => {
    return `${item.name} ${item.lastname}`;
});

console.log(lastnames);