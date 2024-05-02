/**
 * 
 * @param {Array} list an array of film objects
 * @param {String} director 
 * @returns 
 */

// 7. get a list(array) and a string (directors) then return a filtered list of films where only the films by that director are included
export function filterFilmsByDirector(list, director) {
  if (director == "") {
    return list;
  }
  
  return list.filter((filteredDirectors) => { return (filteredDirectors.director === director) });
}


// 8. receive `list` (array) and `prop` (string) parameters, and return a cumulative list of items including every *unique* value that exists in the list at the specified property.
export function getListOf(list, prop) {
  // return [...new Set(list.map(item => item[prop]))];
  const resultArr = [];
  for (let i = 0; i < list.length; i++) {
    if (!resultArr.includes(list[i][prop]))
      {}
    resultArr.push(list[i][prop]);
  }
  
  return resultArr
  // iterate over each item in the list array. For each item (which is an object), it accesses the property specified by the prop parameter using bracket notation (item[prop]).
}

// The Set object in JavaScript is a collection of unique values, meaning each value can occur only once. By wrapping the array returned by list.map(...) in a Set, duplicates are automatically removed, leaving only unique values.The spread operator (...) is used to spread the elements of the Set back into an array.

export function getFilmStats() {
  const arrSum = arr => arr.reduce((a, b) => a + b, 0) // Adds up all values
  const arrAvg = arrSum / arr.length; // Divides those values by the total array
}
// The function that we pass as the first parameter of the reduce method receives two parameters, a and b. In this code, a is our accumulator. It will accumulate our sum as our function works. b is the current value being processed.The second parameter of the reduce method is the initial value we wish to use. We’ve set our initial value to zero which allows us to use empty arrays with our arrSum functions.

// So this is going to start with zero and one by one add each value of the array to our initial value until we’ve looped through the entire array. When done, the accumulator value will be returned