// ================================
// STANDARD INTERNATIONAL SCHOOL
// PAYSLIP GENERATOR
// script.js
// ================================

// Load teachers from localStorage first
const teacherDatabase =
JSON.parse(localStorage.getItem("teachers")) || teachers;

// Get page elements
const teacherInput = document.getElementById("teacherName");
const teacherList = document.getElementById("teacherList");
const message = document.getElementById("message");

// Load teacher names into the datalist
if (teacherList) {

    teacherDatabase.forEach(function(teacher){

        const option = document.createElement("option");

        option.value = teacher.name;

        teacherList.appendChild(option);

    });

}

// Allow Enter key to generate payslip
if (teacherInput) {

    teacherInput.addEventListener("keypress", function(event){

        if(event.key === "Enter"){

            generatePayslip();

        }

    });

}

// Generate Payslip
function generatePayslip(){

    if(message){

        message.textContent = "";

    }

    const enteredName =
    teacherInput.value.trim();

    if(enteredName === ""){

        message.textContent =
        "Please enter a teacher's name.";

        teacherInput.focus();

        return;

    }

    // Search in localStorage database
    const teacher =
    teacherDatabase.find(function(t){

        return t.name.toLowerCase() ===
        enteredName.toLowerCase();

    });

    if(!teacher){

        message.textContent =
        "Teacher not found!";

        teacherInput.focus();

        return;

    }

    // Save selected teacher
    localStorage.setItem(
        "selectedTeacher",
        JSON.stringify(teacher)
    );

    // Open payslip
    window.location.href = "payslip.html";

}