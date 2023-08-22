// Bai1: Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. chương trình thục hiện tính và hiển xem có bao nhiêu số nguyên lớn hơn hoặc = 10
// var numbers = [5, 12, 8, 15, 9, 20, 3, 11, 7, 18]
// var eventNumber = numbers.filter(number => number >= 10 ).length;
// console.log("Số lớn hơn hoặc bằng 10: " + eventNumber);

// bai2: viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử bất kỳ. Chương trình hiện thi ra phần tử lớn nhất và vị trí của phần tử đó
// acc: biến tích lũy - cur: phần tử hiện tại - index: vị trí của phần tử hiện tại
// var arr = [5, 12, 8, 15, 9, 20, 30, 11, 7, 18]
// const { maxNumber, maxIndex} = arr.reduce((acc, cur, index) => 
//     cur > acc.maxNumber ?
//     {maxNumber: cur, maxIndex: index} : 
//     acc, {maxNumber: arr[0], maxIndex: 0})
// console.log("Số lớn nhất: " + maxNumber);
// console.log(`Vi trí của số lớn nhất: ${maxIndex}`);

// bai3: Viết chương trình khởi tạo mảng số nguyên. In ra số lớn nhất trong mảng và tính giá trị trung bình của các phần tử trong mảng
// const arr = [15, 7, 23, 99, 12, 18, 5, 20, 11, 8];
// const maxNumber = Math.max(...arr)

// const sum = arr.reduce((acc, cur) => acc + cur)
// const avg = sum / arr.length
// console.log(`Số lớn nhất: ${maxNumber}`);
// console.log(`Trung bình cộng các số trong mảng: ${avg}`);

// bai4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược mảng đó
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Nhập vào mảng số nguyên (cách nhau bằng dấu cách): ', (input) => {
//   const reversedArray = input.split(' ').map(Number).reverse();
//   console.log('Mảng đảo ngược:', reversedArray);
//   rl.close();
// });

// bai5: viết chương trình đếm số nguyên âm trong 1 chuổi
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Nhập vào chuỗi các số nguyên (cách nhau bằng dấu cách): ', (input) => {
//   const negativeCount = input.split(' ').map(Number).filter(num => num < 0).length;
//   console.log(`Số lượng số nguyên âm trong chuỗi: ${negativeCount}`);
//   rl.close();
// });

// bai6: viết chương trình khởi tạo, nhập vào một mảng số nguyên gồm 10 phần tử. Nhập tạo phàn tử số nguyên V. chương trình tìm xem V có nằm trong mảng số nguyên đó không? nếu V thuộc mảng đã cho thì xóa V khỏi mảng"V is in the array". và ngược lại "V is not in the array"
// const readline = require('readline');
// // truyền một đối tượng chứa 2 thuộc tính
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// // tạo mảng rỗng chứa số nguyên sẽ nhập
// const arr = [];

// rl.question('Nhập vào 10 số nguyên (cách nhau bằng dấu cách): ', input => {
//   // "3 7 9 12 -5" => ['3', '7', '9', '12', '-5'] => [3, 7, 9, 12, -5]
//   arr.push(...input.split(' ').map(Number));

//   rl.question('Nhập vào số nguyên V: ', vInput => {
//     const v = parseInt(vInput);//chuyển đổi chuỗi số nguyên thành giá trị số nguyên

//     if (isNaN(v)) {
//       console.log('Vui lòng nhập một số nguyên.');
//     } else if (arr.includes(v)) {
//       arr.splice(arr.indexOf(v), 1);
//       console.log(`${v} nằm trong mảng. Mảng sau khi xóa ${v}: ${arr}`);
//     } else {
//       console.log(`${v} không nằm trong mảng.`);
//     }

//     rl.close();//đóng giao diện rl sau khi đã hoàn thành việc nhập và xử lý dữ liệu.
//   });
// });

// bai7:viết chương trình khởi tạo, nhập vào một mảng số nguyên gồm 10 phần tử. Nhập tạo phàn tử số nguyên V. chương trình tìm xem V có nằm trong mảng số nguyên đó không? nếu V thuộc mảng đã cho thì xóa V khỏi mảng(bản chất xóa ở đây là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const arr = [];

// rl.question('Nhập vào 10 số nguyên (cách nhau bằng dấu cách): ', input => {
//   arr.push(...input.split(' ').map(Number));

//   rl.question('Nhập vào số nguyên V: ', vInput => {
//     const v = parseInt(vInput);

//     if (isNaN(v)) {
//       console.log('Vui lòng nhập một số nguyên.');
//     } else if (arr.includes(v)) {
//       arr[arr.indexOf(v)] = 0;
//       console.log(`V nằm trong mảng. Mảng sau khi xóa V: ${arr}`);
//     } else {
//       console.log('V không nằm trong mảng.');
//     }

//     rl.close();
//   });
// });

// bai8: 
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const arr = [];

// rl.question('Nhập vào 10 số nguyên (cách nhau bằng dấu cách): ', input => {
//   arr.push(...input.split(' ').map(Number));

//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] < arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   console.log('Mảng sau khi được sắp xếp giảm dần:', arr);

//   rl.close();
// });

// bai9: viết chương trình khởi tạo và nhập 2 mảng số nguyên gôm 10 phần tử, gọi là mảng a và b. Mảng c là một mảng được khai báo gôm 20 phần tử số nguyên. chương trình sẽ lưu các phần tử được nối từ 2 mảng a, b vào c. Hiển thị mảng c
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b, 7, 4, 0, 2, 7];
console.log(c);

