var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {

}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
