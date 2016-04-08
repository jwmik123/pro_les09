var students = [
    {firstName:"Aaron",age:16},
    {firstName:"Klaas",age:22},
    {firstName:"Bob",age:8}
];

students.sort(function(a, b){
    if(a.age > b.age){
        return -1;
    } else {
        return 1;
    }
});

console.table(students);