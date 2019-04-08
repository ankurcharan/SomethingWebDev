

function asyncOperation()
{
	return new Promise(function (resolve, reject) {

		// async task

		// koi error aayegi

		// reject("error");


		// koi error ni aayegi

		resolve("values");
	})
}



asyncOperation()
.then((snapshot) => {
	console.log(snapshot);
})
.catch((err) => {
	console.log(err);
})



// a()
// .then(() => {})
// .then(() => {})
// .then(() => {})
// .catch((err) => {})