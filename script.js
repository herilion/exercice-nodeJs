// //utilisation de Timer
// const monErreur = new Error('une erreur est detectée');
// setTimeout(() => {
//     try {
//         throw monErreur
//     } catch (error) {

//     }
// }, 1000)

const http = require('http');
const server = http.createServer();
server.addListener('request', (req, res) => {
    res.end('<h1>Bienvenu dans notre site</h1>');
})
server.listen(8000);