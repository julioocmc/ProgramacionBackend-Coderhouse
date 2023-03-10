const socket = io.connect();

socket.on("products", (data) =>{
    render(data);
});

function render(data) {
    const html = data.map((elemento) => {
        let modelo =  `<tr class= "table-dark">
                        <td>${elemento.title}</td>
                        <td>${elemento.price}</td>
                        <td><img width=50 src='${elemento.thumbnail}' alt="imgProducto"></td>
                        </tr>`
        return modelo
    })
    .join("\n");
    document.getElementById("idTbody").innerHTML = html
};

function addProduct(){
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value,
    };
    
    socket.emit("new-product", product);
return false;
};

