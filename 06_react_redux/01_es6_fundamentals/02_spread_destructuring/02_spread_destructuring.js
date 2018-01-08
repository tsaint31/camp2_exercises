function go({speed=5,hyperdrive=false, frobnifier=true}) {
  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}
go({ speed: 5 });

// function go(options) {
//   let {
//     speed = 4,
//     enable: { hyperdrive = false, frobnifier = true}
//   } = options;
//   console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
// }
// go({ speed: 5 });

function lastIndexOf(arr, elt, start=arr.length) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

// function lastIndexOf(arr, elt, start) {
//   for (let i = start - 1; i >= 0; i--) {
//     if (arr[i] === elt) {
//       return i;
//     }
//   }
//
//   return -1;
// }
//
// console.log(lastIndexOf([1, 2, 1, 2], 2));
//

function replace(...param) {
  param[0].splice.apply(param[0], [param[1], param[2] - param[1]].concat(param[3]));
}
let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);


// function replace(array, from, to, elements) {
//   array.splice.apply(array, [from, to - from].concat(elements));
// }
// let testArray = [1, 2, 100, 100, 6];
// replace(testArray, 2, 4, [3, 4, 5]);
// console.log(testArray);

function copyReplace(array, from, to, elements) {
  return [...array.slice(0, from), ...elements,...array.slice(to)];
}
console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

// function copyReplace(array, from, to, elements) {
//   return array.slice(0, from).concat(elements).concat(array.slice(to));
// }
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

module.exports = {
  go: go,
  lastIndexOf:lastIndexOf,
  replace:replace,
  copyReplace:copyReplace
};
