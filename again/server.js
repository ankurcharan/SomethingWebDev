const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/getUrl', (req, res) => {
	res.send("jp bhi bhejna hia");
})

app.get('/getParam', (req, res) => {
	let getParams = req.query;		// json object
	res.send(getParams.name);
})

app.post('/postUrl', (req, res) => {
	res.send("jo bhi send krna");
})

app.post('/postParam', (req, res) => {
	let postParam = req.body;
	res.send(postParam.name);
})

app.listen(9000, () => {
	console.log("Server at http://localhost:9000");
})