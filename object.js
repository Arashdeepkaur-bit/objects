
function obj(firstname,lastname,age,eyecolor){
    this.first=firstname,
    this.last=lastname,
    this.age=age,
    this.eye=eyecolor
}
let a= new obj("arash","kaur",21,"brown");
let b= new obj("aman","saini",20,"black");
let c= new obj("divya","yadav",23,"blue");
let x= new obj("abhi","singh",18,"green");
let d="";
let e="";
let f="";
let g="";
    d += a.first+"<br>"
    d += b.last+"<br>"
    d += c.age+"<br>"
    d += x.eye+"<br>"

    e += b.first+"<br>"
    e += c.last+"<br>"
    e += x.age+"<br>"
    e += a.eye+"<br>"

    f += c.first+"<br>"
    f += x.last+"<br>"
    f += a.age+"<br>"
    f += b.eye+"<br>"

    g += x.first+"<br>"
    g += a.last+"<br>"
    g += b.age+"<br>"
    g += c.eye+"<br>"
document.getElementById("div1").innerHTML=d;
document.getElementById("div2").innerHTML=e;
document.getElementById("div3").innerHTML=f;
document.getElementById("div4").innerHTML=g;

