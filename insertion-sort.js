function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	if(array.length > 0){
		for(let j=0; j < array.length; j++){
			for(let i=0; i < array.length; i++){
				let currentValue = array.length-1-i;
				if(array[currentValue] < array[currentValue-1]){
					//console.log("swapping");
					let x = array[currentValue];
					let y = array[currentValue-1];
					array[currentValue-1] = x;
					array[currentValue] = y;
					//console.log(array);
				}else{
					//console.log("in position");
				}
			}
		}
	}
	return array;
}

module.exports = insertionSort;

//console.log("testing array: " + insertionSort([2, 4, 1, 9]));