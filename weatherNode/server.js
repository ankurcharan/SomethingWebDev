const express = require('express');
const request = require('request');

const app = express();


app.use(express.static(__dirname + "/public"));

app.get('/weather', (req, res) => {

	console.log("sxs");


	let getRequestData = req.query;
	let cityName = getRequestData.city;

	// let url = `ancbd${cityName}hsdmsb`; equi "ancbd" + cityName + "hsdmsb";

	// request(url, {}, function);
	request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=3e2cf5d377d212d9d1bdf5109a88b672`, { json: true }, (err, response, body) => {

		if(err) {					// request not made
			// kuch krege
			res.status(500).json({
				success: false,
				message: 'could not request openweathermap'
			});
		}

		if(body.cod === 200) {

			// res.send(body.main.temp);
			// res.status(statusCode).json(jsonObject)
			res.status(200).json({
				success: true,
				temp: body.main.temp
			});
		}
		else {
			// city khrab
			res.status(400).json({
				success: false,
				message: 'city invalid'
			});
		}
	});
});







app.listen(9000, () => { 
	console.log("http://localhost:9000");
})