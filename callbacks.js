// function a()
// {
// 	console.log(2 + 3);
// }


// function b()
// {
// 	console.log(3 + 1);
// }


// a();
// b();

// but what if operations in functions are not primitive





// simulate async operation using these
// setTimeout(function, timeInMillisec);
// setTimeout(() => {
// 	console.log("3 sec baad");
// }, 3000);






// async functions 
// function fileDownload()
// {
// 	// simulation using timeout
// 	setTimeout(() => {
// 		console.log("fileDownloaded");
// 	}, 5000);
// }


// function uploadingFile()
// {
// 	console.log("file uploaded");
// }




// fileDownload();
// console.log("Uploading file");
// uploadingFile();













// CALLBACKS
// example
// app.listen(port, function);

// function asynOperation(callback)
// {
// 	// function ka apna code

// 	// callback call


// 	console.log("doing its own task");


// 	setTimeout(() => {
// 		callback();
// 	}, 5000);


// }


// const joAsyncKeBaadChlnaChahiye = () => {
// 	console.log("Hello");
// }


// asynOperation(joAsyncKeBaadChlnaChahiye);








// SET TIMEOUT

// function a()
// {
// 	console.log(1);

// 	setTimeout(() => {
// 		console.log("after timeout");
// 	}, 5000);

// 	console.log(2);

// 	setTimeout(() => {
// 		console.log("2 sec baad");
// 	}, 2000);
// }



// a();




// FUNCTIONS NOT OVERLOADED

// function a(x, y)
// {
// 	console.log(x);
// 	console.log(y);
// }

// a(2);
// console.log();
// a(2, 3);











// ERROR FIRST FUNCTIONS
function (error, requiredParam)
{
	if(err)
	{
		// handle error
	}

	// normal execution using requiredParam
}







// app.listen(port, function(err) {
// 	if(err)
// 	{
// 		console.log("'server not started");
// 		return;
// 	}
// 	console.log("server started");
// });




// function asyncOperation(callback)
// {
// 	// koi error aayi

// 	callback(new Error("Error messaage"));

// 	// koi errro ni aayi

// 	callback(null, values);
// }
