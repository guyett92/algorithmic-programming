function bubbleSort(array) {

  const len = array.length;
  let stop;
  // Loop through array
  for (let i = 0; i < len; i++){
    // Perform comparisons at current index and next index
      for (let j = 0, stop = len - i; j < stop; j++){
          if (array[j] > array[j + 1]){
              swap(array, j, j + 1);
          }
      }
  }
  // Swap the index values
  function swap(array, firstIdx, secondIdx){

    // Placeholder for the first value
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
  }

  return array;
}
