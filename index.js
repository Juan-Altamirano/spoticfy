const express = require("express");
const app = express();
const port = 3000;

const artistas = require("./controllers/artistas");
const albumes = require("./controllers/albumes");
const canciones = require("./controllers/canciones");

app.use(express.json());

app.get("/", (_, res) => {
    res.send("SpoTICfy API working!");
});

/* ------------------- Rutas ------------------- */

// Artistas
// Completar con las rutas de artistas
// Para acceder a cada funcion de artistas, se debe hacer de la siguiente forma:
// artistas.getArtistas;
// artistas.getArtista;

app.get("/artistas", (req, res) => { res.json(artistas.getArtistas);});
app.get("/artistas/:id", (req, res) => { res.json(artistas.getArtista);});
app.post("/artistas", (req, res) => { res.json(artistas.createArtista);});
app.put("/artistas/:id", (req, res) => { res.json(artistas.updateArtista);});
app.del("/artistas/:id", (req, res) => { res.json(artistas.deleteArtista);});
app.get("/artistas/:id/albumes", (req, res) => { res.json(artistas.getAlbumesByArtista);});
app.get("/artistas/:id/canciones", (req, res) => { res.json(artistas.getCancionesByArtista);});


// Albumes
// Completar con las rutas de albumes
// Para acceder a cada funcion de albumes, se debe hacer de la siguiente forma:
// albumes.getAlbumes;
// albumes.getAlbum;

app.get("/albumes", (req, res) => { res.json(albumes.getAlbumes);});
app.get("/albumes/:id", (req, res) => { res.json(albumes.getAlbum);});
app.post("/albumes", (req, res) => { res.json(albumes.createAlbum);});
app.put("/albumes/:id", (req, res) => { res.json(albumes.updateAlbum);});
app.del("/albumes/:id", (req, res) => { res.json(albumes.deleteAlbum);});
app.get("/albumes/:id/canciones", (req, res) => { res.json(albumes.getCancionesByAlbum);});

// Canciones
// Completar con las rutas de canciones
// Para acceder a cada funcion de canciones, se debe hacer de la siguiente forma:
// canciones.getCanciones;
// canciones.getCancion;

app.get("/canciones", (req, res) => { res.json(canciones.getCanciones);});
app.get("/canciones/:id", (req, res) => { res.json(canciones.getCancion);});
app.post("/canciones", (req, res) => { res.json(canciones.createCancion);});
app.put("/canciones/:id", (req, res) => { res.json(canciones.updateCancion);});
app.del("/canciones/:id", (req, res) => { res.json(canciones.deleteCancion);});
app.put("/canciones/:id/reproducir", (req, res) => { res.json(canciones.reproducirCancion);});

app.listen(port, () => {
    console.log(`SpoTICfy API listening at http://localhost:${port}`);
});
