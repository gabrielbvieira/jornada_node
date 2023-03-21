const fs = require('fs');
const content = 'Gabriel Vieira';

try {
    fs.writeFileSync('arquivo.txt', content);
} 
catch(err) {
    console.log(err);
}