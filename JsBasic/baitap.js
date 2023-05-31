// =======================array==============
// var array = [1,5,12,7,9,8,5]

// in ra cac so chan cua mang
// for(var i = 0; i < array.length; i++){
//     var item = array[i];
//     if(item % 2 == 0){
//         console.log(item);
//     }
// }

// in ra cac so le cua mang
// for(var i = 0; i < array.length; i++){
//     var item = array[i];
//     if(item % 2 == 1){
//         console.log(item);
//     }
// }

// in ra cac so >= 5
// for(var i = 0; i < array.length; i++){
//     var item = array[i];
//     if(item >= 5){
//         console.log(item);
//     }
// }

// cong cac so chia het cho 5
// var sum = 0;
// for(var i = 0; i < array.length; i++){
//     var item = array[i];
//     if(item % 5 == 0){
//         sum += item;
//     }
// }
// console.log(sum);

// in ra 3 so dau cua mang
// console.log(array[0] * array[1] * array[2]);

// in ra 3 phan tu cuoi cua mang
// console.log(array[array.length-1] * array[array.length-2] * array[array.length-3] );

// tim xem trong array co phan tu nao bang 5 khong
// for(var i = 0; i < array.length; i++){
//     var item = array[i];
//     if(item == 5){
//         console.log("Co nha pa");
//     }
// }
//      cach 2
// function checkNumber5(mang){
//     for(var i = 0; i < mang.length; i++){
//         var item = mang[i]
//         if(item == 5){
//             return true
//         }
//     }
//     return false
// }

// dem so lan xuat hien so 5 trong mang
// function count5(mang){
//     var count = 0;
//     for(var i = 0; i < mang.length; i++){
//         var item = mang[i]

//         if(item == 5){
//             count++;
//         }
//     }
//     return count;
// }
// var result = count5(array)
// console.log(result);

// ======================= Object=============
// in ra man hinh ho va ten nguoi dep: Ngo Thuong
// var obj = {
//     firstName: 'Ngo',
//     lastName: 'Thuong'
// }
// console.log('Ho va ten hoc vien: ' + obj.firstName + ' ' + obj.lastName);

// Dinh nghia 1 doi tuong ten car gom cac thuoc tinh. Hang xe: Toyota. Gia: 300000USD, Xuat xu: Nhat Ban
// var car = {
//     hangxe: 'TOYOTA',
//     gia: '300000 USD',
//     xuatsu: 'Nhat Ban'
// }
// console.log('Hang xe: '+car.hangxe + 'Co gia: '+ car.gia +' Xuat su tai: '+ car.xuatsu);

// them thuoc tinh
// car.mausac = 'Den'
// xoa 1 thuoc tinh
// delete car.gia  or car.gia = undefined
// ==============================================array method================================
// arr = [1,3,6,6,3,8,5,97,96] su dung map(return ra gi thi du vao mang moi lun) or filter(logic = true thif dua vao mang moi)
arr = [1,3,6,6,3,8,5,97,96]
// in ra cac so chan trong mang
// var newArr = arr.filter(function(item){
//     return item%2 == 0 
// })
// console.log(newArr); // 6 6 8 96

// var newArr = arr.map(function(item){
//     if(item > 5){
//         return item + 1;
//     }else{
//         return item;
//     }
// });
// console.log(newArr); //   1, 3,  7,  7, 3, 9, 5, 98, 97

// copy mang tu phan tu so 3 den phan tu cuoi cung
// var newArr = arr.slice(3, arr.length)
// console.log(newArr); //[ 6, 3, 8, 5, 97, 96 ]

// Dung splice de xoa mot phan tu bat ky
// arr.splice(3, 1)
// console.log(arr);

//them 1 phan tu vao mang
// arr.push(56)
// console.log(arr);

// dung vong for tang ket qua trong mang gap 2 lan
// arr2 = []
// for(var i = 0; i < arr.length; i++){
//     var item = arr[i]

//     arr2.push(item*2)
// }
// console.log(arr2);

// dung sort de sap xep mang theo thu tu tang - giam dan
// var newarr = arr.sort(function(item1, item2){
//     if(item1 > item2 ){
//         return -1
//     }
//     if(item1 < item2){
//         return 1
//     }
//     if(item1 == item2){
//         return 0;
//     }
// })
// console.log(newarr);

// cho 1 array object
var person = [
    {
        name: 'Thuong',
        class: '21cntt4',
        dateJoin: '09-07-2023',
        age: 20
    },
    {
        name: 'Thu',
        class: '21cntt3',
        dateJoin: '03-02-2023',
        age: 29
    },
    {
        name: 'Thien',
        class: '21cntt5',
        dateJoin: '02-03-2023',
        age: 29
    },
    {
        name: 'Thinh',
        class: '21cntt2',
        dateJoin: '04-07-2023',
        age: 26
    }
]
// yc1: dung sort sap xep ngay tham gia cua hoc vien
// var tuoiSauKhiSapXep = person.sort(function(item1, item2){
//     var date1 = convertDateString(item1.dateJoin)
//     var date2 = convertDateString(item2.dateJoin)

//     if(date1 > date2){
//         return -1;
//     }
//     if(date1 < date2){
//         return 1;
//     }
//     if(date1 == date2){
//         return 0;
//     }
// })
// console.log(tuoiSauKhiSapXep);

 //chuyen string ==> date
//  function convertDateString(dateString){
//     // '09-07-2023' ==> '2023-07-09'
//     var arrDate = dateString.split('-')
//     var date = arrDate[2] +' '+ arrDate[1] + ' ' + arrDate[0]

//     return new Date(arrDate)
//     // new Date
//  } 

// yc2: tim nhung hoc vien tham gia truoc thang 5
// var hocVienTGTT5 = person.filter(function(item){
//     var date = convertDateString(item.dateJoin)
//     return date.getMonth() < 5
// })
// console.log(hocVienTGTT5);

// tao ra so random tu 1 - 50
// var randomnumber = Math.random() * 50;
// console.log(randomnumber);



