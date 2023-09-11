function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
		let num;
		let loop = 1;
		let arr = array;
		let prevArraySize = array.length;
		let arraySize = array.length;
		let splitValue;
		let splitPoint;
		let searchTermPos;
		
		while(num != searchTerm){
			if(loop == 1){
				splitValue = arr[Math.floor(arraySize/2)]
				splitPoint = Math.floor(arraySize/2);
				prevArraySize = splitPoint;
			}else{
				if(arraySize == 0){
					arraySize = 1;
				}
				if(splitValue > searchTerm){
					splitValue = arr[prevArraySize - Math.floor(arraySize)]
					splitPoint = prevArraySize - Math.floor(arraySize);
					prevArraySize = splitPoint;
				}else if (splitValue < searchTerm){
					splitValue = arr[prevArraySize + Math.floor(arraySize)]
					splitPoint = prevArraySize + Math.floor(arraySize);
					prevArraySize = splitPoint;
				}else{
					num = searchTerm;
					searchTermPos = splitPoint;
				}
			}
			loop+=1;
			arraySize = Math.floor(arr.length/Math.pow(2, loop));
			if(loop >= arr.length){
				num = searchTerm;
				searchTermPos = splitPoint;
			}
		}
	console.log("array: " + array);
	return searchTermPos;
}

module.exports = binarySearch;
