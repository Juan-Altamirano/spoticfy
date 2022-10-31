const connection = require("../db");

const getCanciones = (_, res) => {

    connection.query("SELECT canciones.id, canciones.nombre, artistas.nombre AS nombre_artista, albumes.nombre AS nombre_album, canciones.duracion, canciones.reproducciones FROM canciones INNER JOIN albumes ON canciones.album = albumes.id INNER JOIN artistas ON albumes.artista = artistas.id", (err, rows) => {
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

    connection.query("SELECT canciones.id, canciones.nombre, artistas.nombre AS nombre_artista, albumes.nombre AS nombre_album, canciones.duracion, canciones.reproducciones FROM canciones INNER JOIN albumes ON albumes.id = canciones.album INNER JOIN artistas ON artistas.id = albumes.artista WHERE canciones.id = ?", [id], (err, rows) => {
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

    connection.query("INSERT INTO canciones (nombre, album, duracion) VALUES (?, ?, ?)", [nombre, album, duracion], (err, rows) => {
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

    connection.query("UPDATE canciones SET nombre = ?, album = ?, duracion = ? WHERE id = ?", [nombre, album, duracion, id], (err, rows) => {
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
    connection.query("UPDATE canciones set reproducciones = reproducciones + 1 WHERE id = ?", [id_cancion], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        res.json(`Cancion cuyo id es <${id_cancion}> fue reproducida correctamente`);
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