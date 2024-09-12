// let n = [1,2,3,4,5,6,7,8,9]
// n.forEach((sqr) =>{
//     console.log(sqr * sqr)
// })

// let n = [1,2,3,4,5,6,7,8,9]
// let even = n.filter((val) =>{
//    return val%2 === 0
// })
// console.log(even)



// let n = prompt('enter the num')
//  let arr = []
//  for(let i = 1; i <=n; i++){
//     arr.push(i)
    
//     // arr[i-1] = i
//  }
//  console.log(arr)



// let str =  ['asdf', 'sd', 'something','right','position']
// let str1 = str.reduce((a,b) =>{
//           return a.length > b.length ? a:b
// })

//  console.log(str1)


// let arr =[NaN, 0, 15, false, -22, '',undefined, 47, null,94]
//  num = arr.filter(Number)
// console.log(num)


// let arr =  [1, 3, 6, 2, 5, 10] 
// let sum1 = 0;
// let sum2 = 0;
// for(let i = 0; i < arr.length; i++){
//     if(i%2 === 0){
//         sum1 += arr[i]
//     }else{
//         sum2 += arr[i]
//     }
// }
// let result = [sum1,sum2]

// console.log(result)


// arr1 = [1,2,3]
// arr2 = [3,4,5]
// let found = false
// for(let i=0; i< arr1.length; i++ ){
//     for(let j=0; j< arr2.length; j++ ){
//         if(arr1[i] === arr2[j]){
//             console.log(true)
            
//         } 
         
//     }
    
// }
// console.log(false)

// arr1 = [1,2,3];
// arr2 = [9,4,5];
// let found = false;
// for(let i=0; i < arr1.length; i++ ){
//     for(let j=0; j < arr2.length; j++ ){
//         if(arr1[i] === arr2[j]){
//            found = true;
//         }
//     }
// }
// console.log(found);

// arr1 = [1,2,3];
// arr2 = [3,4,5];

// function common(arr1,arr2){
//     for(let i=0; i<arr1.length; i++){
//         if (arr2.includes(arr1[i])) {
//             return true
//         }
//     }
//     return false
// }
// console.log(common(arr1,arr2))


// function differenceOf2Arrays(array1, array2) {
//     // Step 1: Initialize an empty array to store unique elements
//     var temp = [];

//     // Step 2: Loop through array1 to find elements not in array2
//     for (var i = 0; i < array1.length; i++) {
//         if (array2.indexOf(array1[i]) === -1) {
//             temp.push(array1[i]);
//         }
//     }

//     // Step 3: Loop through array2 to find elements not in array1
//     for (var j = 0; j < array2.length; j++) {
//         if (array1.indexOf(array2[j]) === -1) {
//             temp.push(array2[j]);
//         }
//     }

//     // Step 4: Sort the resulting array in ascending order
//     temp.sort((a, b) => a - b);

//     // Step 5: Return the sorted array of unique elements
//     return temp;
// }

// Q5. Write a JavaScript function to find the difference of two arrays. --------------------------------------------------------------------

// function differenceArray(arr1, arr2) {
//     // Create sets from both arrays
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
    
//     // Find elements in arr1 that are not in arr2
//     const diff1 = arr1.filter(element => !set2.has(element));
    
//     // Find elements in arr2 that are not in arr1
//     const diff2 = arr2.filter(element => !set1.has(element));
    
//     // Concatenate the two difference arrays
//     const diff = [...diff1, ...diff2];
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
//  let diff = []
// //Check elements in arr1 that are not in arr2
//  arr1.forEach(element => {
//     if (!arr2.includes(element) && !diff.includes(element)) {
//         diff.push(element);
//     }
// });

// // Check elements in arr2 that are not in arr1
// arr2.forEach(element => {
//     if (!arr1.includes(element) && !diff.includes(element)) {
//         diff.push(element);
//     }
// });
// --------------------------------------------------------------------------------------------------------------------------------------------------------------

    
//     return diff;
// }

// // Sample data
// const arr1 = [1, 2, 3];
// const arr2 = [100, 2, 1, 10];

// // Finding the difference
// const result = differenceArray(arr1, arr2);
// console.log(result);  // Output: [3, 100, 10]






