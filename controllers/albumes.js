const connection = require("../db");

const getAlbumes = (_, res) => {
    connection.query("SELECT * FROM albumes", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        return res.json(rows);
    });
    
    // Completar con la consulta que devuelve todos los albumes
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": 1,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            {
                "id": 2,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            ...
        ]
    */
};

const getAlbum = (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM albumes WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve un album por id
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": 1,
            "nombre": "Nombre del album",
            "nombre_artista": "Nombre del artista"
        }
    */
};

const createAlbum = (req, res) => {

    const nombre = req.body.nombre;
    const artista = req.body.artista;

    connection.query("INSERT INTO albumes (nombre, artista) VALUES (?)", [nombre, artista], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        res.send(`Album <${nombre}> del artista <${artista}> creado correctamente`);        
    });

    connection.query("SELECT * FROM albumes", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        console.log(rows)
    });

    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
};

const updateAlbum = (req, res) => {

    const id = req.params.id;
    const nombre = req.body.nombre;
    const artista = req.body.artista;

    connection.query("UPDATE albumes set nombre = '?', set artista = '?' WHERE id = ?", [nombre, artista, id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
    });

    connection.query("SELECT * FROM albumes", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        console.log(rows)
    });

    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
};

const deleteAlbum = (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM albumes WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }        
    });

    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const getCancionesByAlbum = (req, res) => {
    const id_album = req.params.id;
    connection.query("SELECT * FROM canciones WHERE album = ?", [id_album], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return err;
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

module.exports = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};
