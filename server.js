const express = require("express");
const app = express();

app.get("/", (req, res)=>{
	res.send("u\00a1Servidor seguro con SSL/TLS!");
});

app.listen(3000, () => {
	console.log("Servidor corriendo en el puerto 3000")
});