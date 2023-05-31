if(4<3){
    console.log(1);
    console.log(2);
}else{
    console.log(3);
    console.log(4);
}

// for

for(var i = 0; i < 10; i++){
    console.log(i);
}

var arr = ['1', '2', '3', '4', '5']
for(var i = 0; i < arr.length; i++){
    console.log(i);
}

// for in
var person = {
    name: 'Thuong',
    age: 19,
    salary: '1000$'
}
var arr = ['1', '2', '3', '4', '5']
for(var key in arr){
    console.log(arr[key]);//1 2 3 4 5 
}

for(var key in person){
    console.log(arr[key]);//name age salary 
}

for(var key in person){
    console.log(person[key]);//Thuong 19 1000$ 
}

//for of
var person = {
    name: 'Thuong',
    age: 19,
    salary: '1000$'
}
var arr = ['1', '2', '3', '4', '5']

for(var item of arr){
    console.log(item);//1 2 3 4 5 
}
for(var item of person){
    console.log(item);//loi vi person la 1 object - iterable, vong lap thi duoc
}
// 
