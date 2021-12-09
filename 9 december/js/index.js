// const person1 = {name: "Azim", surname: "mov", age: 20}
// const person2 = {name: "Azim", surname: "mov", age: 12}
// const person3 = {name: "Azim", surname: "mov", age: 23}
// const person4 = {name: "Azim", surname: "mov", age: 3}
// const person5 = {name: "Azim", surname: "mov", age: 223}
// const arr = [person1,person2,person3,person4,person5]
// const result = arr.filter((test) =>{
//     return test.age>18
// })
// result.forEach(element => console.log(element.age));
// console.log(result);



//FILTER NATIVE

// const person1 = {name: "Azim", surname: "mov", age: 20}
// const person2 = {name: "Azim", surname: "mov", age: 12}
// const person3 = {name: "Azim", surname: "mov", age: 23}
// const person4 = {name: "Azim", surname: "mov", age: 30}
// const person5 = {name: "Azim", surname: "mov", age: 223}
// const arr = [person1,person2,person3,person4,person5]
// let counter = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index].age > 18) {
//         counter++;
//     }
// }
// console.log(counter +" person Up 18");


//EVERY NATIVE SOME NATIVE
// const person1 = {name: "Azim", surname: "mov", age: 20}
// const person2 = {name: "Azim", surname: "mov", age: 12}
// const person3 = {name: "Azim", surname: "mov", age: 23}
// const person4 = {name: "Azim", surname: "mov", age: 30}
// const person5 = {name: "Azim", surname: "mov", age: 23}
// const arr = [person1,person2,person3,person4,person5]
// let counter  = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index].age>30) {
//         counter++;
//     }
// }
// if (counter>=1) {
//     console.log("This is not Every");
// }
// else{
//     console.log("This is Every");
// }



//SOME NATIVE
// const person1 = {name: "Azim", surname: "mov", age: 20}
// const person2 = {name: "Azim", surname: "mov", age: 12}
// const person3 = {name: "Azim", surname: "mov", age: 223}
// const person4 = {name: "Azim", surname: "mov", age: 30}
// const person5 = {name: "Azim", surname: "mov", age: 23}
// const arr = [person1,person2,person3,person4,person5]
// let counter  = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index].age>30) {
//         counter++;
//     }
// }
// if (counter>=1) {
//     console.log("This is True/Some");
// }
// else{
//     console.log("This is False/Some");
// }

//FIND NATIVE

// const person1 = {name: "Azim", surname: "mov", age: 20}
// const person2 = {name: "Azim1", surname: "mov", age: 12}
// const person3 = {name: "Azim2", surname: "mov", age: 23}
// const person4 = {name: "Azim1", surname: "mov", age: 30}
// const person5 = {name: "Azim4", surname: "mov", age: 23}
// const arr = [person1,person2,person3,person4,person5]
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index].name==="Azim1") {
//         console.log(arr[index].name, arr[index].surname,arr[index].age);
//     }
// }

//REDUCE NATIVE
const person1 = {name: "Azim", surname: "mov", age: 20}
const person2 = {name: "Azim1", surname: "mov", age: 12}
const person3 = {name: "Azim2", surname: "mov", age: 23}
const person4 = {name: "Azim1", surname: "mov", age: 30}
const person5 = {name: "Azim4", surname: "mov", age: 23}
let counter  = "";
const arr = [person1,person2,person3,person4,person5]
// for (let index = 0; index < arr.length; index++) {
//     counter+=arr[index].name + " ";    
// }
for (let index = 0; index < arr.length; index++) {
    counter+=arr[index].age + " ";    
}
console.log(counter);



//SORT NATIVE
// const person1 = {name: "Azim", surname: "mov", age: 20}
// const person2 = {name: "Azim1", surname: "mov", age: 12}
// const person3 = {name: "Azim2", surname: "mov", age: 23}
// const person4 = {name: "Azim1", surname: "mov", age: 30}
// const person5 = {name: "Azim4", surname: "mov", age: 23}
// const arr = [person1,person2,person3,person4,person5]
// const arrages = [person1.age,person2.age,person3.age,person4.age,person5.age]
// let counter;
// for (let index = 0; index < arrages.length; index++) {
//     for (let j = index+1; j < arrages.length; j++) {
//         if (arrages[index]>arrages[j]) {
//             counter=arrages[index];
//             arrages[index]=arrages[j];
//             arrages[j]=counter;
//         }    
//     }    
// }
// console.log(arrages);