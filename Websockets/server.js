const handlebars = require("express-handlebars");
const express = require("express");
const PORT = 8081;
const Productos = require("./api/productos.js");
const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");

let productos = new Productos();

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.engine(
	"hbs",
	handlebars({
		extname: ".hbs",
		defaultLayout: "index.hbs",
	})
);
app.set("view engine", "hbs");
app.set("views", "./views");

io.on("connection", (socket) => {
    console.log("se ha conectado un usuario");

    socket.emit("productList", productos.itemList);

    socket.on("newProduct", (data) => {
        let producto = productos.getAll();
        productos.post(producto);
        io.sockets.emit("productList", productos.itemList);
    });
});


app.use(express.static("public"));

const router = express.Router();
app.use("/", router);

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/", (req, res) =>{
    const producto = req.body;
    productos.post(producto);
    res.redirect("/");
});


httpServer.listen(8081, () => console.log("servidor levantado"));