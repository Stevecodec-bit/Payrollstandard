// =======================================
// STANDARD INTERNATIONAL SCHOOL
// PAYSLIP SYSTEM
// payslip.js
// =======================================

// Retrieve selected teacher
const teacher = JSON.parse(localStorage.getItem("selectedTeacher"));

// If no teacher is selected, return to home page
if (!teacher) {
    window.location.href = "index.html";
}

// Format currency
function money(amount) {
    return "₦" + Number(amount).toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Current Date
const today = new Date();

// Fill date fields
document.getElementById("month").textContent =
today.toLocaleString("en-US", { month: "long" });

document.getElementById("day").textContent =
today.getDate();

document.getElementById("year").textContent =
today.getFullYear();

// Fill staff details
document.getElementById("staffId").textContent =
teacher.staffId;

document.getElementById("name").textContent =
teacher.name;

// Fill salary details
document.getElementById("basic").textContent =
money(teacher.basic);

document.getElementById("gross").textContent =
money(teacher.grossPay);

document.getElementById("late").textContent =
money(teacher.lateComing);

document.getElementById("absent").textContent =
money(teacher.absentee);

document.getElementById("bank").textContent =
money(teacher.bankCharges);

document.getElementById("lesson").textContent =
money(teacher.lessonPlan);

document.getElementById("duty").textContent =
money(teacher.dutyRoaster);

document.getElementById("other").textContent =
money(teacher.otherDeduction);

// Calculate totals automatically
const totalDeduction =
teacher.lateComing +
teacher.absentee +
teacher.bankCharges +
teacher.lessonPlan +
teacher.dutyRoaster +
teacher.otherDeduction;

const netPay =
teacher.grossPay - totalDeduction;

// Display totals
document.getElementById("deduction").textContent =
money(totalDeduction);

document.getElementById("net").textContent =
money(netPay);