//BAi 1: Dùng MAP Tạo một mảng mới chứa bình phương của từng số trong mảng numbers. 
// const numbers = [1, 2, 8, 4, 5]
// const square = numbers.map(num => num ** 2)
// console.log(square);

//BAi 2: Cguyen doi chu thuong thanh chua hoa
// const strings = ['ngo', 'thi', 'xuan', 'thuong']
// const uppercaseStrings = strings.map(str => str.toUpperCase())
// console.log(uppercaseStrings);

// Bai 3: 


/* Filter dùng để lọc mảng và trả về mảng thỏa điều kiện lặp */
//Bai 1: Lọc cac so chan tu mang numbers
// const numbers = [1, 2,6 , 4, 5]
// const evenNumber = numbers.filter(num => num % 2 === 0)
// console.log(evenNumber);

// Bai 2: lọc ra các số nguyên tố từ một mảng
// const arr = [1, 2, 4, 7, 65, 24, 387, 83]
// function Prime(number) {
//     if (number < 2) {
//         return false
//     }
//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// const isPrime = arr.filter(number => Prime(number))
// console.log(isPrime);

/* Some dùng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa điều kiện hay không */
// Kiểm tra xem mảng numbers có chứa số chẵn hay không
// const numbers = [1, 4, 5, 7]
// const evenNumbers = numbers.some(num => num % 2 === 0)
// console.log(evenNumbers);

