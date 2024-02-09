function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let addArray=[] 
   for (const arr of array) {
    if (typeof arr === 'number' && !isNaN(arr)) {
        addArray.push(arr)
    }
   }
   return addArray;
}
console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]))
console.log(deleteInvalids(["1" , {num:2} , NaN ]))
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids([ 1 , 2 , -3 ]))