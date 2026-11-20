//Non-primitive Data Types

//1)Array
console.log("Array");
//1.Number Array
let numarr =[3,4,6,7,8,9,7];
console.log(numarr);
console.log(numarr[2]);
console.log(numarr.length);

//2. String Array

let stringarr =["Gauri","Rashmi","Vaishnavi","Aarti"];
console.log(stringarr);
console.log(stringarr[0]);
console.log(stringarr.length);

//3.char Array

let chararr =['A','B','C','D','E'];
console.log(chararr);
console.log(chararr[3]);
console.log(chararr.length);


//2)Object
console.log("Object");

let student ={
    rollno:101,
    name:"Gauri",
    marks:90.65,
    grade:'A',
}
console.log(student);

//Nested-object

let student2 ={
    rollno:101,
    name:"Gauri",
    marks:90.65,
    grade:'A',

    address:{
        pincode:364579,
        area:"karve nagar",
        city:"Pune"
    }
}
console.log(student2);
console.log(student2.name);
console.log(student2.address.city);