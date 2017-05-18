


function clickHandler () {
	console.log(this); //current elements being clicked
	console.log(this.value);
};



var numbers = document.getElementsByClassName("number");
	for (var i = 0; i < numbers.length; i++) {
		var num = numbers[i];

		num.addEventListener("click", clickHandler)
	};

var operators = document.getElementsByClassName("operator");
	for (var i = 0; i < operators.length; i++) {
		var operator = operators[i];

		operator.addEventListener("click", clickHandler);
	}

var eq = document.getElementById("equals");
eq.addEventListener("click", clickHandler);	

var clear = document.getElementById("clear");
clear.addEventListener("click", clickHandler);



// var inPut = document.getElementById("input");
// 	inPut.addEventListener("input", function (event) {

// 		event.preventDefault(); //prevents the default action of submit.
// var numbers = document.getElementsByClassName("number");
// console.log(numbers);

	



// var disPlay = document.getElementsByClassName(“display”)[0].value;
// disPlay.addEventListener("display", function (event) {
// 	equation=[]
//     print = document.getElementsByClassName('display')
//     print[0].value = 'type'
//     math=[]

// })
	// if (disPlay.value) {
	// 	console.log(disPlay.value);
	// 	disPlay.value = "";
	// };

	// });
	
    


