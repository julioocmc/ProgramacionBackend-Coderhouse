const express = require("express");
const expbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const { options } = require("./src/config/session.js");
const { Server: HttpServer } = require("http");
const routes = require("./src/routers/index.js");

const app = express();
const httpServer = new HttpServer(app);

// Websocket config
const { socket } = require("./socket.js");
const { Server: IOServer } = require("socket.io");
const io = new IOServer(httpServer);
socket(io)

//Session config
app.use(session(options));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/views/layouts"));
app.use("/", routes);

//Motor de plantillas
app.engine(
  "hbs",
  expbs.engine({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "./src/views/partials"),
    extname: ".hbs",
  })
);
app.set("views", "./src/views/partials");
app.set("views engine", "hbs");

//Manejador de errores
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Ocurrio un error: " + err);
});

//Server
httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});
