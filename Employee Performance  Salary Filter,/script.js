const employees = [
  { id: 1, name: "Ahmed", department: "Sales", salary: 8500, experience: 5, performance: 4.7, isActive: true },
  { id: 2, name: "Sara", department: "Marketing", salary: 9200, experience: 3, performance: 4.1, isActive: false },
  { id: 3, name: "Omar", department: "IT", salary: 12500, experience: 6, performance: 5, isActive: true },
  { id: 4, name: "Laila", department: "Sales", salary: 7800, experience: 2, performance: 3.9, isActive: true },
  { id: 5, name: "Mostafa", department: "IT", salary: 14000, experience: 8, performance: 4.9, isActive: true },
  { id: 6, name: "Heba", department: "HR", salary: 6900, experience: 4, performance: 4.3, isActive: false },
  { id: 7, name: "Khaled", department: "Marketing", salary: 10200, experience: 7, performance: 4.6, isActive: true },
  { id: 8, name: "Mona", department: "HR", salary: 8000, experience: 5, performance: 4.5, isActive: true }
];

let activeEmp = employees.filter(emp => emp.isActive === true && emp.performance >= 4.5);
let avgSalary = employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length;


let salaryAddEmp = employees.map(
  (emp) => ({
    name: emp.name,
    department: emp.department,
    salary: emp.salary + (emp.salary * 0.10),
  })
);

/* اجاد اعلى موظف ك تقييم  */
let maxPerformance = employees[0].performance; // نبدأ بأول موظف
let topEmp = employees[0]; // نفترض أنه الأعلى

employees.find(emp => {
  if (emp.performance > maxPerformance) {
    maxPerformance = emp.performance;
    topEmp = emp;
  }
});

function print(title,state){
    console.log(title);
    state.forEach(element => {
        console.log(`${element.name} - ${element.department} - ${element.performance}`);
    });
}

print("active employees  and performance > 4.5 : ",activeEmp);

console.log("avrage in employees salary : " , avgSalary);
console.log("new employees array : " , salaryAddEmp);
console.log("Top Performance Employe: " , topEmp);



let div = document.createElement("div");
let myH2 = document.createElement("h3");
let myH3 = document.createElement("h2");

console.log(div);