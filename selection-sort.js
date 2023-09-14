function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	let smallestValue;

	 for(let i=0; i < array.length; i++){
		smallestValue = i;
		for(let j=1; j < array.length; j++){
			if(array[smallestValue] > array[i+j]){
				smallestValue = i+j;
			}
		}
		let x = array[smallestValue];
		let y = array[i];
		array[i] = x;
		array[smallestValue] = y;
	 }

	return array;
}

module.exports = selectionSort;
