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
    let sorted = false;
    if(arr.length > 0){
        while(!sorted){
            
            for(let i=0; i < arr.length; i++){
                if(arr[i] > arr[i+1]){
                    let x = arr[i];
                    let y = arr[i+1];
                    arr[i+1] = x;
                    arr[i] = y;
                    sorted = false;
                    break;
                }else{
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
