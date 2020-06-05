function insertionSort (array) {

  //Loop through the array
  for (let i = 1; i < array.length; i++) {
    //Previous index
    let j = i - 1;
    //Placeholder for current value
    let temp = array[i];
    // Loop to insert at the correct location
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
