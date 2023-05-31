/*
   cac kieu du lieu

   String "Nodemy"        " "
   Number 1.5             NaN
   Boolean true/false     
   Array []
   Object {}              null   undefined

   function   function print(){}
  
   //cac gia tri tuong ung FALSE
   0
   " "
   NaN : Not a number  // 7 + "a" : NaN
   Null : co gia tri nhung khong co nghia // var x = null;
   undefined : khong co gia tri
   vd: 
if(0){
    console.log("Thuc hien khoi if");
}else{
    console.log("Khong duoc thuc hien");
}
 */
/*2 cach khai bao function */
// cach1
// var print2 = function(){
//     console.log('print2 xin chao');
// }


// cach2
// function print(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }

// function print(){
//     console.log('xin chao');
//     console.log('xin chao');
//     console.log('xin chao');
//     console.log('xin chao');

//     return 8888
// }
// var ketqua = print();
// console.log(ketqua); // 4lan 'xin chao' 8888 

// function print(hocvien, address){
//     console.log('xin chao ' + hocvien);
//     console.log(hocvien + ' co dia chi tai ' + address);

//     return 8888
// }
// print('Thuong', 'quang nam')
// print('Hung', 'hue')

// cong 2 so
// function add(number1, number2){
//     var sum = number1 + number2;

//     return sum;
// }
// var ketqua = add(8, 10);
// var ketqua2 = add(2, 20);
// console.log(ketqua2);

// /tinh giai thua 4! = 1*2*3*4
// function tinhgiaithua(number){
//     var ketqua = 1;
//     for(var i = 1; i <= number; i++ ){
//         ketqua *= i
//     }    
//     return ketqua;
// }
// var giaithua = tinhgiaithua(3)
// console.log(giaithua);

// Viết một hàm để tạo một đối tượng người có các thuộc tính sau: tên, tuổi, giới tính.
// function Person(name, age, gender){
//     this.name = name,
//     this.age = age,
//     this.gender

// }
// const person1 = new Person('thuong', 19, 'nu')
// console.log(person1);