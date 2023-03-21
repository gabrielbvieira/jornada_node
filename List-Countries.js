const axios = require('axios');

axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
        response.data.forEach((item) => {
        try {
            console.log("Nome comum: "+item.name.common + "\n - Nome oficial "+item.name.nativeName.spa);
        } catch(err) {
            console.log(err)
        }
        });
    });

//console.log(axios.get('https://restcountries.com/v3.1/all'))