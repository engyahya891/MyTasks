function generateReport(studentname, score, subject) {
    let grade;
    let status;
    if (score >= 90) {
        grade = "A";
        status = "Excellent";
    } else if (score < 90 && score >= 75) {
        grade = "B";
        status = "Very Good";
    } else if (score < 75 && score >= 60) {
        grade = "C";
        status = "Good";
    } else {
        grade = "F";
        status = "Needs Improvement";
    }

    return `
   
   <h1>Student Report</h1>
   <h3>Name : ${studentname}</h3>
   <h3>subject : ${subject}</h3>
   <h3>Score : ${score}</h3>
   <h3>Grade : ${grade} </h3>
   <h3>Status : ${status}</h3>
   
   `;
}
document.write(generateReport("yahya", 89, "Math"));
document.write(generateReport("Ahmad", 74, "Math"));
document.write(generateReport("Ali", 91, "Math"));
