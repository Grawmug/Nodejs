const fs = require('fs');


const getTotalHandler = () => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(`Liczba zapisanych cytatów w bazie to: ${(JSON.parse(data)).length}`);
        }
    });
}
module.exports = {
    command: 'total',
    desc: 'Podanie liczby zapisanych cytatów w bazie',
    handler: getTotalHandler
};