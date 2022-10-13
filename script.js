//utilisation de Timer
const monErreur = new Error('une erreur est detectée');
setTimeout(() => {
    throw monErreur
}, 1000)