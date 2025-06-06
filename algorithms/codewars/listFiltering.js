/*
 create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

function filter_list(l) {
  let filteredArray = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      filteredArray.push(l[i]);
    }
  }
  return filteredArray;
}

function filter(l) {
  return l.filter((v) => {
    return typeof v === number;
  });
}

function filterStrings(l) {
  return l.filter(Number.isInteger);
}
