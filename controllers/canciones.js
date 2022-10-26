const connection = require("../db");

const getCanciones = (_, res) => {

    connection.query("SELECT * FROM canciones", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve todas las canciones
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            ...
        ]
    */
};

const getCancion = (req, res) => {

    const id = req.params.id;
    connection.query("SELECT * FROM canciones WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve una canción
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Se deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id de la canción",
            "nombre": "Nombre de la canción",
            "nombre_artista": "Id del artista",
            "nombre_album": "Id del album",
            "duracion": "Duración de la canción",
            "reproducciones": "Reproducciones de la canción"
        }
    */
};

const createCancion = (req, res) => {

    const nombre = req.body.nombre;
    const album = req.body.album;
    const duracion = req.body.duracion;

    connection.query("INSERT INTO canciones (nombre, album, duracion) VALUES (?)", [nombre, album, duracion], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        res.json(`Cancion <${nombre}> del album <${album}> y de duracion <${duracion}> fue creada correctamente`);
    });

    connection.query("SELECT * FROM canciones", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        console.log(rows)
    });

    // Completar con la consulta que crea una canción
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "artista": "Id del artista",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
    // (Reproducciones se inicializa en 0)
};

const updateCancion = (req, res) => {

    const id = req.params.id;
    const nombre = req.body.nombre;
    const album = req.body.album;
    const duracion = req.body.duracion;

    connection.query("UPDATE canciones set nombre = '?', set album = '?', set duracion = '?' WHERE id = ?", [nombre, album, duracion, id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        res.json(`Cancion <${nombre}> del album <${album}> y de duracion <${duracion}> cuyo id es <${id}> fue actualizada correctamente`);
    });

    // Completar con la consulta que actualiza una canción
    // Recordar que los parámetros de una consulta PUT se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "artista": "Id del artista",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
    // (Reproducciones no se puede modificar con esta consulta)
};

const deleteCancion = (req, res) => {

    const id = req.params.id;
    connection.query("DELETE FROM canciones WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        res.json(`Cancion cuyo id es <${id}> fue borrada correctamente`);
    });

    // Completar con la consulta que elimina una canción
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const reproducirCancion = (req, res) => {

    const id_cancion = req.params.id;

    var reproducciones = connection.query("SELECT reproducciones FROM canciones WHERE id = ?", [id_cancion], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        res.json(rows);
    });

    reproducciones += 1

    connection.query("UPDATE canciones set reproducciones = '?' WHERE id = ?", [reproducciones, id_cancion], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(rows);
    });

    // Completar con la consulta que aumenta las reproducciones de una canción
    // En este caso es una consulta PUT, pero no recibe ningún parámetro en el body, solo en los params
};

module.exports = {
    getCanciones,
    getCancion,
    createCancion,
    updateCancion,
    deleteCancion,
    reproducirCancion,
};