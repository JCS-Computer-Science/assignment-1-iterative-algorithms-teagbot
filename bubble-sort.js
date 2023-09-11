function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    let arr = array;
    console.log(arr);
    let sorted = false;
    if(arr.length > 0){
        while(!sorted){
            
            for(let i=0; i < arr.length; i++){
                if(arr[i] > arr[i+1]){
                    console.log("sorting");
                    let x = arr[i];
                    let y = arr[i+1];
                    arr[i+1] = x;
                    arr[i] = y;
                    sorted = false;
                    break;
                }else{
                    console.log("good");
                    sorted = true;
                }
            }
        }
        
    }else{
        sorted = true;
    }
	return arr;
}

module.exports = bubbleSort;

//console.log("Testing array: " + bubbleSort([5, 1, 3, 7, 10, 2, 25, 2, 1]))
console.log("Testing array: " + bubbleSort([]));
