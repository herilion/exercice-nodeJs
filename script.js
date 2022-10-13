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
monEvenement.addListener('timeout', () => {
    console.log('2 secondes se sont écoulées');
})
const server = http.createServer();
server.addListener('request', (req, res) => {
    monEvenement.emit('se_connecter');
    res.end('<h1>Bienvenu dans notre site</h1>');
})
setInterval(() => {
    monEvenement.emit('timeout');
}, 2000)
server.listen(8000);