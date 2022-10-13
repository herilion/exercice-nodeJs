// //utilisation de Timer
// const monErreur = new Error('une erreur est detectée');
// setTimeout(() => {
//     try {
//         throw monErreur
//     } catch (error) {

//     }
// }, 1000)

const http = require('http');
const events = require('events');
const monEvenement = new events.EventEmitter();
monEvenement.addListener('se_connecter', () => {
    console.log('un utlisateur vient de se connecter');
})
const server = http.createServer();
server.addListener('request', (req, res) => {
    monEvenement.emit('se_connecter');
    res.end('<h1>Bienvenu dans notre site</h1>');
})
server.listen(8000);