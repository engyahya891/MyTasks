let pers = document.getElementById("std1");//الطلاب المتفوقين
let notPers = document.getElementById("std2");//الطلاب الغائبين
let nameElement = document.getElementsByClassName("name");//اسماء الطلاب
let age = document.getElementsByClassName("age");//اعمار الطلاب
let material = document.getElementsByClassName("material");//المادة
let tecElements = document.getElementsByClassName("tec");//المعلم
let deg = document.getElementsByClassName("deg");//درجة الطلاب
let pres2 = document.getElementsByClassName("pres");//الغيابات
let not = document.getElementsByClassName("not");//النتيجة
let audience = document.getElementsByClassName("audience");//الحصور
let srl = document.getElementsByClassName("srl");//حالة الطالب 
let rite = document.getElementsByClassName("rite");//تقييم الطالب


const students = [
    {
        name: "Ahmed",
        age: 17,
        grade: "A",
        subject: "Math",
        teacher: "Mr. Khaled",
        isPresent: true,
        absences: 1,
        score: 92,
    },
    {
        name: "Mahmoud",
        age: 18,
        grade: "B",
        subject: "Physics",
        teacher: "Ms. Salma",
        isPresent: true,
        absences: 2,
        score: 85,
    },
    {
        name: "Sara",
        age: 17,
        grade: "A+",
        subject: "English",
        teacher: "Mr. Tamer",
        isPresent: false,
        absences: 0,
        score: 98,
    },
    {
        name: "Omar",
        age: 16,
        grade: "C",
        subject: "History",
        teacher: "Mrs. Dina",
        isPresent: false,
        absences: 4,
        score: 67,
    },
    {
        name: "Nour",
        age: 17,
        grade: "B+",
        subject: "Biology",
        teacher: "Mr. Yasser",
        isPresent: true,
        absences: 1,
        score: 89,
    },
    {
        name: "Youssef",
        age: 18,
        grade: "A-",
        subject: "Chemistry",
        teacher: "Ms. Fatma",
        isPresent: true,
        absences: 0,
        score: 91,
    },
    {
        name: "Hala",
        age: 16,
        grade: "C+",
        subject: "Geography",
        teacher: "Mr. Ahmed",
        isPresent: false,
        absences: 3,
        score: 72,
    },
];

/* القيم الاحصائية */
var here = 0;
var notHere = 0;
var i = 0;
/* حساب الغيابات */
while (i < students.length) {
    if (!students[i].isPresent) {
        notHere += 1;
    } else {
        here += 1;
    }
    i++;

}
notPers.innerHTML = `الطلاب الغائبين : ${notHere}`;

/* حساب الطلاب المتفوقين */
let mut = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 90) {
        mut += 1;
    }else{
        console.log("لايوجد طلاب متفوقين")
    }


pers.innerHTML = `الطلاب المتفوقين : ${mut}`;
/* name */

    nameElement[i].innerHTML = `${students[i].name}`;

/* age */

    age[i].innerHTML = `العمر : ${students[i].age}`;

/* material */

    material[i].innerHTML = `المادة :  ${students[i].subject}`;


/* teacher */

    tecElements[i].innerHTML = `المعلم :   ${students[i].teacher}`;


/* grade */

    deg[i].innerHTML = `الدرجة : ${students[i].grade}`


/* absences */

    pres2[i].innerHTML = `الغيابات : ${students[i].absences}`;

/* score */

    not[i].innerHTML = `النتيجة  : ${students[i].score}`;



/* الحضور + ستايل البوكس */

    if (!students[i].isPresent) {
        audience[i].innerHTML = `غائب ❌`;
        audience[i].style.backgroundColor = "#FFA1A1";
        audience[i].style.color = "red";
    } else {
        audience[i].innerHTML = `حاضر ✅`;
        audience[i].style.backgroundColor = "#B3FFB0";
        audience[i].style.color = "green";
    }



/* حالة الطالب + ستايل البوكس */

    if (students[i].isPresent && students[i].score >= 90) {
        srl[i].textContent = "طالب متفوق 🎖️";
        srl[i].style.color = "green";
        srl[i].style.backgroundColor = "#B3FFB0";

    } else if (students[i].absences > 3 || students[i].score < 50) {
        srl[i].textContent = "يحتاج متابعة ⚠";
        srl[i].style.color = "red";
        srl[i].style.backgroundColor = "#FFA1A1";
    } else {
        srl[i].textContent = "طالب جديد 🆕";
        srl[i].style.color = "blue";
        srl[i].style.backgroundColor = "#B0F6FF";
    }




/* التصنيف */

    const std = students[i];
    switch (std.grade) {
        case "A+":
            rite[i].innerHTML = "ممتاز جدا جدا 🎉";
            rite[i].style.color = "blue";
            rite[i].style.backgroundColor = "#4CAFFC";
            break;
        case "A":
            rite[i].innerHTML = "ممتاز 🥇";
            rite[i].style.color = "green";
            rite[i].style.backgroundColor = "#92FF78";
            break;
        case "A-":
            rite[i].innerHTML = "جيد جدا  🥈";
            rite[i].style.color = "blue";
            rite[i].style.backgroundColor = "#4CAFFC";
            break;
        case "B+":
            rite[i].innerHTML = "جيد  👍";
            rite[i].style.color = "#FFAA00";
            rite[i].style.backgroundColor = "#FFF7A1";
            break;
        case "B":
            rite[i].innerHTML = "مقبول  🙂";
            rite[i].style.color = "#FFAA00";
            rite[i].style.backgroundColor = "#FFF7A1";
            break;
        case "C+":
            rite[i].innerHTML = "تحت المتوسط  ⚠";
            rite[i].style.color = "red";
            rite[i].style.backgroundColor = "#FCA99D";
            break;
        case "C":
            rite[i].innerHTML = "ضعيف ❌";
            rite[i].style.backgroundColor = "#C39DFC"
            rite[i].style.color = "#6400FA";
            break;
        default:
            rite[i].innerHTML = "غير مصنف 📚";
            break;
    }
}