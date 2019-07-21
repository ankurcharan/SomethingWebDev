// a();
// b();
// c();
// d();

// a -> b -> c - > d




// function a(callback)
// {
// 	// a ne apna kia


// 	callback();
// }

// function b(callback)
// {
// 	// b ne apna kia

// 	callback();
// }

// function c(callback)
// {
// 	// c ne apna kia

// 	callback();
// }

// a(
// 	b(
// 		c(
// 			d
// 		)
// 	)
// );



function a(callback)
{
	console.log("Hi A");
	callback();
}

const b = function (callback)
{
	console.log("Hi B");
	callback();
	return callback;
}

const c = function ()
{
	console.log("Hi C");
}

a(b(c));