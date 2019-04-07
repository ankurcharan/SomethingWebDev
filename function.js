// function functionName(x)
// {
// 	console.log(x);
// }


// functionName(2);





// let / const 
// const functionName = function (x)
// {
// 	console.log('without params', x);
// }


// functionName(2);



// arrow functions
// const x = (params) => {
// 	console.log(params);
// }

// x(2);



// higher order functions
function sqaure(x)
{
	return x * x;
}

// console.log(sqaure(2));




// function returnF()
// {
// 	const x = () => {
// 		console.log("HOF");
// 	}

// 	return x;
// }


// let xxx = returnF();
// xxx();





function x(callback)
{
	// do anything
	//apna kuch bhh


	callback();
}


const y = () => {
	console.log("y");
}


x(y);


// y();
// let zz = y;
// zz();