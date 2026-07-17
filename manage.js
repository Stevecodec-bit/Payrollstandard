// ======================================
// STANDARD INTERNATIONAL SCHOOL
// TEACHER MANAGEMENT
// ======================================

// Load database
let teacherDatabase =
JSON.parse(localStorage.getItem("teachers")) || [...teachers];

let editIndex = -1;

displayTeachers();

// ===============================
// DISPLAY TEACHERS
// ===============================

function displayTeachers(){

    const tbody =
    document.querySelector("#teacherTable tbody");

    tbody.innerHTML = "";

    teacherDatabase.forEach(function(teacher,index){

        const row = document.createElement("tr");

        row.innerHTML = `

        <td>${teacher.staffId}</td>

        <td>${teacher.name}</td>

        <td>₦${teacher.grossPay.toLocaleString()}</td>

        <td>₦${teacher.netPay.toLocaleString()}</td>

        <td>

        <button onclick="editTeacher(${index})">✏ Edit</button>

        <button onclick="deleteTeacher(${index})">🗑 Delete</button>

        <button onclick="generatePayslip(${index})">📄 Payslip</button>

        </td>

        `;

        tbody.appendChild(row);

    });

}

// ===============================
// SAVE TEACHER
// ===============================

function saveTeacher(){

    const staffId =
    document.getElementById("staffId").value.trim();

    const name =
    document.getElementById("teacherName").value.trim();

    const grossPay =
    Number(document.getElementById("grossPay").value)||0;

    const lateComing =
    Number(document.getElementById("lateComing").value)||0;

    const absentee =
    Number(document.getElementById("absentee").value)||0;

    const bankCharges =
    Number(document.getElementById("bankCharges").value)||0;

    const lessonPlan =
    Number(document.getElementById("lessonPlan").value)||0;

    const dutyRoster =
    Number(document.getElementById("dutyRoster").value)||0;

    const otherDeduction =
    Number(document.getElementById("otherDeduction").value)||0;

    const totalDeduction =
        lateComing+
        absentee+
        bankCharges+
        lessonPlan+
        dutyRoster+
        otherDeduction;

    const netPay =
        grossPay-totalDeduction;

    const teacher={

        staffId,
        name,

        basic:grossPay,

        grossPay,

        lateComing,

        absentee,

        bankCharges,

        lessonPlan,

        dutyRoaster:dutyRoster,

        otherDeduction,

        totalDeduction,

        netPay

    };

    if(editIndex==-1){

        teacherDatabase.push(teacher);

    }else{

        teacherDatabase[editIndex]=teacher;

        editIndex=-1;

    }

    localStorage.setItem(
        "teachers",
        JSON.stringify(teacherDatabase)
    );

    displayTeachers();

    clearForm();

}

// ===============================
// EDIT
// ===============================

function editTeacher(index){

    const t=teacherDatabase[index];

    editIndex=index;

    document.getElementById("staffId").value=t.staffId;

    document.getElementById("teacherName").value=t.name;

    document.getElementById("grossPay").value=t.grossPay;

    document.getElementById("lateComing").value=t.lateComing;

    document.getElementById("absentee").value=t.absentee;

    document.getElementById("bankCharges").value=t.bankCharges;

    document.getElementById("lessonPlan").value=t.lessonPlan;

    document.getElementById("dutyRoster").value=t.dutyRoaster;

    document.getElementById("otherDeduction").value=t.otherDeduction;

}

// ===============================
// DELETE
// ===============================

function deleteTeacher(index){

    if(confirm("Delete this teacher?")){

        teacherDatabase.splice(index,1);

        localStorage.setItem(
            "teachers",
            JSON.stringify(teacherDatabase)
        );

        displayTeachers();

    }

}

// ===============================
// GENERATE PAYSLIP
// ===============================

function generatePayslip(index){

    localStorage.setItem(
        "selectedTeacher",
        JSON.stringify(teacherDatabase[index])
    );

    window.location.href="payslip.html";

}

// ===============================
// CLEAR
// ===============================

function clearForm(){

    document.getElementById("staffId").value="";

    document.getElementById("teacherName").value="";

    document.getElementById("grossPay").value="";

    document.getElementById("lateComing").value="";

    document.getElementById("absentee").value="";

    document.getElementById("bankCharges").value="";

    document.getElementById("lessonPlan").value="";

    document.getElementById("dutyRoster").value="";

    document.getElementById("otherDeduction").value="";

}