
function asyncOperation()
{
	return new Promise((resolve, reject) => {

		// async task

		// koi error aayegi

		// reject("error");


		// koi error ni aayegi

		resolve("values");
	});
}

// asyncOperation().then(function).catch(function)
asyncOperation().then((snapshot) => {
	console.log("then,", snapshot);
}).catch((err) => {
	console.log("catchh " , err);
})



// a()
// .then(() => {})
// .then(() => {})
// .then(() => {})
// .catch((err) => {})














