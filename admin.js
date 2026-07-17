// ===============================
// CHECK LOGIN
// ===============================

if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// ===============================
// LOAD TEACHERS
// ===============================

let teacherDatabase =
    JSON.parse(localStorage.getItem("teachers")) || teachers;

// ===============================
// LOAD DASHBOARD
// ===============================

updateDashboard();

function updateDashboard() {

    document.getElementById("totalTeachers").textContent =
        teacherDatabase.length;

    let total = 0;

    teacherDatabase.forEach(function (teacher) {

        total += Number(teacher.netPay);

    });

    document.getElementById("totalPayroll").textContent =
        "₦" + total.toLocaleString();

    document.getElementById("averageSalary").textContent =
        "₦" + Math.round(total / teacherDatabase.length).toLocaleString();

    loadRecentTeachers();

}

// ===============================
// SEARCH TEACHER
// ===============================

function searchTeacher() {

    const name = document
        .getElementById("searchTeacher")
        .value
        .trim()
        .toLowerCase();

    if (name === "") {

        alert("Please enter a teacher's name.");

        return;

    }

    const teacher = teacherDatabase.find(function (t) {

        return t.name.toLowerCase().includes(name);

    });

    if (!teacher) {

        alert("Teacher not found.");

        return;

    }

    localStorage.setItem(
        "selectedTeacher",
        JSON.stringify(teacher)
    );

    window.location.href = "payslip.html";

}

// ===============================
// RECENT TEACHERS TABLE
// ===============================

function loadRecentTeachers() {

    const body =
        document.getElementById("recentTeachersBody");

    body.innerHTML = "";

    teacherDatabase.forEach(function (teacher, index) {

        body.innerHTML += `

<tr>

<td>${teacher.staffId}</td>

<td>${teacher.name}</td>

<td>₦${Number(teacher.netPay).toLocaleString()}</td>

<td>

<button onclick="viewPayslip(${index})">

View

</button>

</td>

</tr>

`;

    });

}

// ===============================
// VIEW PAYSLIP
// ===============================

function viewPayslip(index) {

    localStorage.setItem(
        "selectedTeacher",
        JSON.stringify(
            teacherDatabase[index]
        )
    );

    window.location.href = "payslip.html";

}

// ===============================
// LOGOUT
// ===============================

function logout() {

    sessionStorage.removeItem("loggedIn");

    window.location.href = "login.html";

}

// ===============================
// TOGGLE SIDE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {

        overlay.style.display = "block";

    } else {

        overlay.style.display = "none";

    }

}

// ===============================
// CLOSE SIDE MENU
// ===============================

function closeMenu() {

    document
        .getElementById("sideMenu")
        .classList.remove("open");

    document
        .getElementById("overlay")
        .style.display = "none";

}