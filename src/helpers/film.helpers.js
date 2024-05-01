// get a list(array) and a string (directors) then return a filtered list of films where only the films by that director are included
export default function filterFilmsByDirector(list, directors) {
  return list.filter(filteredDirectors => filteredDirectors.directors === directors);
}


// receive `list` (array) and `prop` (string) parameters, and return a cumulative list of items including every *unique* value that exists in the list at the specified property.
export function getListOf(getList, prop) {
  return [...new Set(list.map(item => item[prop]))]; // iterate over each item in the list array. For each item (which is an object), it accesses the property specified by the prop parameter using bracket notation (item[prop]).
}

// The Set object in JavaScript is a collection of unique values, meaning each value can occur only once. By wrapping the array returned by list.map(...) in a Set, duplicates are automatically removed, leaving only unique values.The spread operator (...) is used to spread the elements of the Set back into an array. 