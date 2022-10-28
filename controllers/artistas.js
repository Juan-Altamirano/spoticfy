const connection = require("../db");

const getArtistas = (req, res) => {
    connection.query("SELECT * FROM artistas", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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
    connection.query("SELECT * FROM artistas WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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
    const nombre = req.body.nombre;
    connection.query("INSERT INTO artistas (nombre) VALUES (?)", [nombre], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(`Artista <${nombre}> creado correctamente`);        
    });

    connection.query("SELECT * FROM artistas", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
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
    connection.query('UPDATE artistas SET nombre = ? WHERE id = ?', [nombre, id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(`Artista <${nombre}> actualizado correctamente`);
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
            return res.sendStatus(500);
        }
        return res.json(`Artista <${id}> borrado correctamente`);        
    });

    // Completar con la consulta que elimina un artista
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
};

const getAlbumesByArtista = (req, res) => {
    const id_artista = req.params.id;
    connection.query("SELECT * FROM albumes WHERE artista = ?", [id_artista], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return res.sendStatus(500);
        }
        return res.json(rows);
    });

    // Completar con la consulta que devuelve las canciones de un artista 
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getAlbumes
};

const getCancionesByArtista = (req, res) => {
    connection.query("Select canciones.album, albumes.artista FROM canciones INNER JOIN albumes ON canciones.album = albumes.id")
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

// Ignora esto, lo hice al principio y no lo borre

// const QueryIn = (string, params) => {
//     return new Promise((resolve, reject) => {
//         PoolCon.query(string, params, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }
