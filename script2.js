//Data types
//primitive-data types

//1.number

let rollno=101;
let marks=89.67;
console.log("rollno is:"+rollno);
console.log("Marks is:"+marks);

//2.string 

let name ="gauri";
let grade='A';
console.log("name is:"+name);
console.log("grade is"+grade);

//3.boolean

let isPassed =true;
console.log("value is:"+isPassed);

//4. bigInt

let accno=12345678901234567890n;
console.log("valuf of accno is:"+accno);

//5. undefined 

let city;
console.log("city is:"+city);  //undefined

//6. null

let address =null;
console.log("Address is:"+address);  //null

//7. object

let x =Symbol('pqr');
console.log(x.description);


let y=Symbol('pqr');
let z=Symbol('pqr');
console.log(y===z);