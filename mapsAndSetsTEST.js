console.log(new Set([1,1,2,2,3,4]))
// 1,2,3,4
//my initial answer is correct

console.log([...new Set("referee")].join(""))
//referee still because its joined again but shouold be all unique
//my initial answer is wrong

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{[1,2,3], true,[1,2,3], false}

//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr){
    return new Set(arr).size === arr.length;
}
//tested on this and it worked

//vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(val) {
    const vowels = 'aeiou'
    const nVowels = new Map();
    let count = 0;
    for (let letter of val) {
        if (vowels.includes(letter)) {
            nVowels.set(letter, count++);
        } else {
            nVowels.set(letter, 1);
        }
    }
    return nVowels;
}
console.log(vowelCount('heeartee'))

