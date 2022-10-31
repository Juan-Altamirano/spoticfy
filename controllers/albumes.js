const connection = require("../db");

const getAlbumes = (_, res) => {
    connection.query("SELECT albumes.id, albumes.nombre, artistas.nombre AS nombre_artista FROM albumes INNER JOIN artistas ON albumes.artista = artistas.id", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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
    connection.query("SELECT albumes.id, albumes.nombre, artistas.nombre AS nombre_artista FROM albumes INNER JOIN artistas ON artistas.id = albumes.artista WHERE albumes.id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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

    connection.query("INSERT INTO albumes (nombre, artista) VALUES (?, ?)", [nombre, artista], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(`Album <${nombre}> del artista <${artista}> creado correctamente`);        
    });

    connection.query("SELECT * FROM albumes", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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

    connection.query("UPDATE albumes SET nombre = ?, artista = ? WHERE id = ?", [nombre, artista, id], (err, _) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(`Album <${nombre}> del artista <${artista}> cuyo id es <${id}> fue actualizado correctamente`);
    });

    connection.query("SELECT * FROM albumes", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        console.log(rows);
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
            return res.sendStatus(500);
        }
        return res.json(`Album cuyo id es <${id}> fue borrado correctamente`);        
    });

    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const getCancionesByAlbum = (req, res) => {
    const id_album = req.params.id;
    connection.query("SELECT canciones.id, canciones.nombre, artistas.nombre AS nombre_artista, albumes.nombre AS nombre_album, canciones.duracion, canciones.reproducciones FROM canciones INNER JOIN albumes ON albumes.id = canciones.album INNER JOIN artistas ON artistas.id = albumes.artista WHERE albumes.id = ?", [id_album], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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
