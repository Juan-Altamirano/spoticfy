const conn = require("../db");

const getArtistas = (req, res) => {
    connection.query("SELECT * FROM artistas", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        return res.json(rows);
    });
    
    // Completar con la consulta que devuelve todos los artistas
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            ...
        ]
    */
};

const getArtista = (req, res) => {
    
    const id = req.params.id;
    connection.query("SELECT nombre FROM artistas WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve un artista
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id del artista",
            "nombre": "Nombre del artista"
        }
    */
};

const createArtista = (req, res) => {
    connection.query("INSERT INTO artistas (nombre) VALUES (?)", [req.body.nombre], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }        
    });

    connection.query("SELECT * FROM artistas", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        
        console.log(rows)
    });

    // Completar con la consulta que crea un artista
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista",
        }
    */
};

const updateArtista = (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    connection.query("UPDATE artistas set nombre = '?' WHERE id = ?", [nombre, id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
    });

    // Completar con la consulta que actualiza un artista
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista"
        }
    */
};

const deleteArtista = (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM artistas WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }        
    });

    // Completar con la consulta que elimina un artista
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const getAlbumesByArtista = (req, res) => {
    const id_artista = req.params.id;
    connection.query("SELECT nombre FROM albumes WHERE artista = ?", [id_artista], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve las canciones de un artista 
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getAlbumes
};

const getCancionesByArtista = (req, res) => {
    const id_artista = req.params.id;
    connection.query("SELECT id FROM albumes WHERE artista = ?", [id_artista], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        id_album = res.json(rows)
    });

    connection.query("SELECT nombre FROM canciones WHERE album = ?", [id_album], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve las canciones de un artista
    // (tener en cuenta que las canciones están asociadas a un álbum, y los álbumes a un artista)
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

module.exports = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};

const QueryIn = (string, params) => {
    return new Promise((resolve, reject) => {
        PoolCon.query(string, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
