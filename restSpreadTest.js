//ES5
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//ES5
function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0)
}
console.log(filterOutOdds(1,2,3,4,101))

//findMin
function findMin(...nums) {
    return nums.reduce((accu, num) => accu < num ? accu : num)
}
console.log(findMin(-1,2,3,4,101))

//mergeObjects
function mergeObjects(nums1, nums2) {
    return {...nums1, ...nums2}
}
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))

//doubleAndReturnArgs
function doubleAndReturnArgs(arr, nums1, nums2) {
    return [...arr, nums1, nums2]
}
console.log(doubleAndReturnArgs([1,2,3],4,4))




//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(itemsArr) {
    const indx = Math.floor(Math.random()*itemsArr.length);
    return [...itemsArr.slice(0, indx), ...itemsArr.slice(indx+1)]; //per research, slice, then concat
}
console.log(removeRandom([1,2,3,4,4]))

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return[...array1, ...array2]
}
console.log(extend([1,2,3,4,4], [10,20,30]))

// /** Return a new object with all the keys and values
// from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]:val};
}
console.log(addKeyVal({'A':1,'B':2,'C':3,'D':4}, 'newKey', 100))

// /** Return a new object with a key removed. */

function removeKey(obj, key) {
    const {[key]:toBeRemoved, ...newArr} = obj; //I have to research this
    return newArr;
}
console.log(removeKey({'A':1,'B':2,'C':3,'D':4}, 'C'))

// /** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    const nObj1 = {...obj1}
    const nObj2 = {...obj2}
    return {...nObj1, ...nObj2};
}
console.log(combine({'A':1,'B':2},{'C':3,'D':4}))

// /** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const {[key]:toBeRemoved, ...newArr} = obj; //I have to research this
    return {newArr, [key]:val};
}
console.log(update({'A':1,'B':2},'C', 3))