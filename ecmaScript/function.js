// function tco(f){
//     let value
//     let active = false
//     let accumulated = []
//     return function accumulator(){
//         accumulated.push(arguments)
//         if(!active){
//             active = true
//             while(accumulated.length){
//                 value = f.apply(this,accumulated.shift());
//             }
//             active = false;
//             return value
//         }
//     }
// }
// let sum = tco(function(x,y){ 
//     if(y > 0){
//         return sum(x + 1,y - 1);
//     }else{
//         return x;
//     }
// })
// console.log(sum(1,10000));

// let c = 1000;
// var a = 100;
// b = 123;
// let arr = []
// arr.unshift(a);
// arr.shift();
// console.log('a+b',c)
// for(let i = 1 ; i <  10 ; i++){

// }
