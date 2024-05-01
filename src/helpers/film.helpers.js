/**
 * 
 * @param {Array} list an array of film objects
 * @param {String} director 
 * @returns 
 */

// 7. get a list(array) and a string (directors) then return a filtered list of films where only the films by that director are included
export function filterFilmsByDirector(list, director) {
  return list.filter((filteredDirectors) => { return (filteredDirectors.director === director)});
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