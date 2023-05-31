// tinh tong tu 0 den n
// function tinhtong(n){
//     let sum = 0
//     for(let i = 0; i < n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(tinhtong(5));

// kiem tra so nguyen to - in kq ra man hinh
// function ktsonguyento(n){
//     // lặp từ 2 đến n để kiểm tra từng số trong đoạn
//     for(let i = 2; i <= n; i++){
//         let songuyento = true
//         // kiểm tra từng số từ 2 đến căn bậc hai của số đó
//         for(let j = 2; j <= Math.sqrt(i); j++){
//             if(i%j === 0){
//                 songuyento = false;
//                 break;
//             }
//         }
//         // Nếu số đó không chia hết cho bất kỳ số nào trong đoạn
//         if(songuyento){
//             console.log(i);
//         }
//     }
// }
// console.log(ktsonguyento(10));

// tim phan tu lon nhat trong mang
// var arr = [3, 5, 6, 57, 29, 58]
// function solonnhat(arr){
//     let max = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log('So lon nhat trong mang la: ' + solonnhat(arr));

// tim so lon thu hai trong mang
let arr = [3, 5, 6, 57, 29, 58, 99]
function solonthu2(arr){
    let max = arr[0]
    let secondnumber = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < max){
            arr = secondnumber
            secondnumber = arr[i]
        }
        else if(arr[i] > secondnumber && arr[i] < max ){
            secondnumber = arr[i]
        }
    }
    return secondnumber
}
console.log('so lon thu hai trong mang la: ' + solonthu2(arr));