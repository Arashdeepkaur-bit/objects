let a = "";
const person = {fname:"John", lname:"Doe", age:25,phone:"343434",city:"Mohali"}; 
let x;
for (x in person) {
    a += x+":"+ person[x] + "<br>";
}
document.getElementById("demo").innerHTML = a;