// var Array = [1, 2, 3]
// let person = {
//     name: "Thuong"
// }
// Array.push(person)
// Array.splice(3, 2)
// console.log(Array);

//loop 
// let Array = [1, 2, 3]
// Array.forEach(element => {
//     console.log(element);
// });


// tinh tong cac phan tu trong mang
// let Array = [1, 2, 3, 4]
// let sum = Array.reduce((previoursValue, currentValue) => previoursValue +currentValue)
// console.log(sum); 

// let tem = []
// for(let i = 0; i < Array.length; i++){
//     if(Array[i]%2 === 0){
//         temp.push(Array[i]);
//     }
// }
// let temp = Array.filter((element))

// let sum = (a, b) => a+b
// console.log(sum(3,4));
// arrowFunction k the dung this 

// function sum(a, b){
//     return a+b
// }
// console.log(sum(3,4));

// Rest param
// Khi bạn truyền vào nhiều tham số khi gọi hàm, các tham số này sẽ được gom lại thành một mảng trong tham số rest. 
// Điều này giúp bạn làm việc với một tập hợp không xác định trước được của các đối số.
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Kết quả: 15
  console.log(sum(10, 20)); // Kết quả: 30
  console.log(sum(2, 4, 6, 8, 10)); // Kết quả: 30

//   spead operatior
// gộp mang, sao chep mang, sao chep doi tượng
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];//gộp
const combinedArray2 = [...arr1];//sao chep 
// sao chep doi tuong 
let person = {
    name: "thuong"
}
let teacher = {
    ...person,
    age: 18
}
console.log(teacher);


console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
  
