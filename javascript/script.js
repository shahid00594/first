	// // welcome javascript
	// /* welcome to javascript coding*/
	// console.log('hello javascript');
	// console.log('start coding');
	// const object = {
	//     a1: 'avinash',
	//     a2: 'ranjan',
	//     a3: 'is',
	//     a4: 'a',
	//     a5: 'good',
	//     a6: 'web developer'
	// };

	// for (let a in object) {
	//     console.log(a);
	// }

	// //example of object reference

	// const obj = {};
	// // create reference
	// const a = obj;
	// // create property
	// a.b = 'example of object reference';
	// console.log(obj.b);

	// class person {
	//     constructor(fname, lname) {
	//         this.fname = fname;
	//         this.lname = lname;
	//     }
	// }
	// class age extends person {
	//     constructor(age) {
	//         super('Avinash', 'Ranjan');
	//         this.age = 25;
	//     }
	//     showup() {
	//         console.log(
	//             'My name is' +
	//             ' ' +
	//             this.fname +
	//             ' ' +
	//             this.lname +
	//             '.' +
	//             '\n ' +
	//             'I am' +
	//             ' ' +
	//             this.age +
	//             ' ' +
	//             'year old.'
	//         );
	//     }
	// }
	// const d = new age();
	// d.showup();

	document.querySelector("h1").addEventListener("click", function () {
		this.classList.toggle("strike");
	});



	document.querySelector(".btn").addEventListener("click", function () {

		document.querySelector("div").classList.toggle("invisible");
	});


	document.querySelector("div").addEventListener("click", function () {

		document.querySelector(".btn").classList.toggle("invisible");

	});