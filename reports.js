// ===============================
// CHECK LOGIN
// ===============================

if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// ===============================
// LOAD DATABASE
// ===============================

const teacherDatabase =
JSON.parse(localStorage.getItem("teachers")) || teachers;

// ===============================
// FORMAT MONEY
// ===============================

function money(amount){

    return "₦" + Number(amount).toLocaleString();

}

// ===============================
// GENERATE REPORT
// ===============================

generateReport();

function generateReport(){

    document.getElementById("reportTeachers").textContent =
    teacherDatabase.length;

    let grossTotal = 0;
    let deductionTotal = 0;
    let netTotal = 0;

    let highest = teacherDatabase[0];
    let lowest = teacherDatabase[0];

    const body =
    document.getElementById("reportBody");

    body.innerHTML = "";

    teacherDatabase.forEach(function(teacher){

        grossTotal += Number(teacher.grossPay);
        deductionTotal += Number(teacher.totalDeduction);
        netTotal += Number(teacher.netPay);

        if(Number(teacher.netPay) > Number(highest.netPay)){
            highest = teacher;
        }

        if(Number(teacher.netPay) < Number(lowest.netPay)){
            lowest = teacher;
        }

        body.innerHTML += `

        <tr>

            <td>${teacher.staffId}</td>

            <td>${teacher.name}</td>

            <td>${money(teacher.grossPay)}</td>

            <td>${money(teacher.totalDeduction)}</td>

            <td>${money(teacher.netPay)}</td>

        </tr>

        `;

    });

    document.getElementById("reportGross").textContent =
    money(grossTotal);

    document.getElementById("reportDeduction").textContent =
    money(deductionTotal);

    document.getElementById("reportNet").textContent =
    money(netTotal);

    document.getElementById("highestTeacher").textContent =
    highest.name + " (" + money(highest.netPay) + ")";

    document.getElementById("lowestTeacher").textContent =
    lowest.name + " (" + money(lowest.netPay) + ")";

}