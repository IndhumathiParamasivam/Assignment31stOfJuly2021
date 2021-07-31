let Students = [
    {name : "Adhi", gender : "male"},
    {name : "Ahamed", gender : "Male"},
    {name : "Dharshan", gender : "male"},
    {name : "Indhumathi" , gender : "Female"},
    {name : "Sridevi" , gender : "female"},
    {name : "Abi", gender : "female"},
    {name : "Vijay", gender : "male"},
    {name : "Rani" , gender : "female"}
];
let mytable = "<table><th>Name</th><th>Gender</th>";
Students.map((student) => mytable +="<tr><td>"+student.name+"</td><td>"+student.gender+"</td></tr>");
mytable+="</table>";console.log("List of students:");
console.log(Students);
document.getElementById("stdAllDetail").innerHTML = mytable;
let femaleStudents = Students.filter( (student) =>student.gender.toLowerCase()==="female").map( (femalestudent) => femalestudent.name);
console.log("List of female students:");
console.log(femaleStudents);
document.getElementById("femalestudents").innerHTML = femaleStudents;
let studentnamestartwithA = Students.filter( (student) =>student.name[0].toUpperCase()==='A').map( (student) => student.name);
console.log("Students name start with 'A':");
console.log(studentnamestartwithA);
document.getElementById("namestartwithA").innerHTML = studentnamestartwithA;
let countofmaleStudents = Students.filter( (student) => student.gender.toLowerCase()==="male").length;
console.log("Count of Male Students:");
console.log(countofmaleStudents);
document.getElementById("malestudentscount").innerHTML = countofmaleStudents;
