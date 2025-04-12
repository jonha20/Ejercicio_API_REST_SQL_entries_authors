
const checkApiKey = function (req, res, next) {
    // Comprobar si existe API KEY en BBDD pasada por cliente
    // ...
    if (req.query.API_KEY === "rnd_7x5ZKWpfkXnp3pduekKwufQgRoSw") {
        next(); // Pasa a la siguiente tarea
    } else {
        //Mando mensaje de error
        res.status(401).send("Error. API KEY no proveída");
    }
}

module.exports = checkApiKey;