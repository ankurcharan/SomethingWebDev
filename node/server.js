// get express in file
const express = require('express');
// get body parsr
const bodyParser = require('body-parser');

// returns express app
const app = express();



// body-parser add krdo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// GET REQUEST
// app.get('url', function);
// get request on any url

// http://localhost:9000/get
app.get('/get', (req, res) => {	

	// get ka data
	console.log(req.query);

	res.send(req.query.name);
})





//POST REQUEST
// app.post(url, function);

app.post('/post', (req, res) => {

	// post rqst ka data	
	console.log(req.body);

	res.send(req.body.name);
})







//create server
const PORT = 500;
app.listen(PORT, () => {
	
	console.log("Server started at http://localhost:9000");
})
