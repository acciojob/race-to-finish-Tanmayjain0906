window.promises = [];

for(let i=1;i<=5;i++)
	{
		let delay = Math.floor(Math.random()* 5)+1;
		let prom = new Promise((resolve) => {
			setTimeout(() => {
				resolve(`promise ${i} is resolve after a delay of ${delay} seconds`);
			}, delay*1000);
		})
		promises.push(prom);
	}

Promise.any(promises).then((data) => {
	let div = document.getElementById("output");
	div.innerText = data;
})
// Do not change the code above this
// add your promises to the array `promises`
