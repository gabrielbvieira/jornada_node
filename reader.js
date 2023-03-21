const fs = require('fs');

try {
    const content = fs.readFileSync('arquivo.txt', 'utf-8');
    console.log(content);
}
catch (err) {
    console.log(err);
}