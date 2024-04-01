
// 1-masala

// let list1 = [1,2,4]
// let list2 = [1,3,4]
// let result = list1.concat(list2).sort((a, b) => a - b)
// console.log(result);


// 2-masala

// 1-usul
// function number(nums){
//     let arr = [4,5,6,7,0,1,2]
//     let index = arr.indexOf(nums)
//     console.log(index);
// }
// number(0)

// 2-usul

// let total = [4,5,6,7,0,1,2]
// let result = 0

// function findindex (nums){
//     for(let i = 0; i < total.length; i++){
//         if(total[i] == nums){
//             result = i
//         }

//     }
// }
// findindex(0)
// console.log(result);



// 3-masala

// let nums = [5, 7, 7, 8, 8, 10]
// let result = []
// let target = 8
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//         result.push(i )
//     }
// }
// if (result.length == 0) {
//     console.log("Mavjud emas")
// }
// console.log(result)


// 4-masala

// let total = [1,2,3,4,5,6,7,8,9]
// function findmax(param){
//     let max = Math.max(...total)
//     let min = Math.min(...total)
//     console.log("Functionga berilgan parametr arrayning max sonnidan " + (max - param) + " ta  kichik" );
//     console.log("Functionga berilgan parametr arrayning min sonnidan " + (min - param) + " ta  katta" );
// }
// findmax(3)


// 5-masala

// function findmax (number_1, number_2 ){
//     obj = {num_1: 3, num_2: 5, num_3: 7, num_4: 9 }
//     obj.num_1 = number_1
//     obj.num_4 = number_2
// }
// findmax(4, 6)
// console.log(obj);


// 6-masala

// function mergeObjects(obj1, obj2) {
//     let merged = {};
//     for (let key in obj1) {
//         if (merged.hasOwnProperty(key)) {
//             merged[key].push(obj1[key]);
//         } else {
//             merged[key] = [obj1[key]];
//         }
//     }
//     for (let key in obj2) {
//         if (merged.hasOwnProperty(key)) {
//             merged[key].push(obj2[key]);
//         } else {
//             merged[key] = [obj2[key]];
//         }
//     }
//     return merged;
// }
// let obj1 = {'a': 10, 'b': 20, 'c': 30};
// let obj2 = {'b': 15, 'c': 25, 'd': 35};
// let mergedObj = mergeObjects(obj1, obj2);
// console.log("Birlashtirilgan obyekt:", mergedObj);
// function compareValues(obj) {
//     let values = Object.values(obj);
//     let minValue = Math.min(...values.map(arr => Math.min(...arr)));
//     let maxValue = Math.max(...values.map(arr => Math.max(...arr)));
//     return [minValue, maxValue];
// }
// let [minVal, maxVal] = compareValues(mergedObj);
// console.log("Function parametri qancha kichik va qancha katta:", minVal, maxVal);


// 7-masala


// let obj1 = { 'a': 10, 'b': 20, 'c': 30 };
// let obj2 = { 'x': 5, 'y': 15, 'z': 25 };
// let obj3 = { 'one': 3, 'two': 6, 'three': 9 };
// let objects = [obj1, obj2, obj3];
// let totalSum = objects.reduce((acc, obj) => {
//     return acc + Object.values(obj).reduce((sum, val) => sum + val, 0);
// }, 0);
// function findMaxMinSum(totalSum) {
//     let maxVal = Number.NEGATIVE_INFINITY;
//     let minVal = Number.POSITIVE_INFINITY;

//     for (let obj of objects) {
//         for (let val of Object.values(obj)) {
//             if (val > maxVal) {
//                 maxVal = val;
//             }
//             if (val < minVal) {
//                 minVal = val;
//             }
//         }
//     }
//     return [maxVal, minVal];
// }
// let [maxVal, minVal] = findMaxMinSum(totalSum);
// console.log("Eng katta qiymat:", maxVal);
// console.log("Eng kichik qiymat:", minVal);


// 8-masala


// let arr = [1, 3, 2.0, 4, 5];
// let maxVal = Math.max(...arr);
// let minVal = Math.min(...arr);

// let maxIndex = arr.indexOf(maxVal);
// let minIndex = arr.indexOf(minVal);
// [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];

// console.log("O'zgardi!:", arr); 

