// ==============================
// SYSTEM SETTINGS
// ==============================

// Create default settings if they don't exist
if (localStorage.getItem("schoolSettings") == null) {

    const defaults = {

        schoolName: "STANDARD INTERNATIONAL SCHOOL",

        motto: "Raising Excellence Leaders",

        address: "Gombe",

        phone1: "08034384657",

        phone2: "09053852428",

        city: "Gombe",

        payMonth: "July 2026"

    };

    localStorage.setItem(
        "schoolSettings",
        JSON.stringify(defaults)
    );

}

// Load saved settings
const settings = JSON.parse(
    localStorage.getItem("schoolSettings")
);

document.getElementById("schoolName").value =
settings.schoolName;

document.getElementById("motto").value =
settings.motto;

document.getElementById("address").value =
settings.address;

document.getElementById("phone1").value =
settings.phone1;

document.getElementById("phone2").value =
settings.phone2;

document.getElementById("city").value =
settings.city;

document.getElementById("payMonth").value =
settings.payMonth;


// Save settings
function saveSettings(){

    const newSettings = {

        schoolName:
        document.getElementById("schoolName").value,

        motto:
        document.getElementById("motto").value,

        address:
        document.getElementById("address").value,

        phone1:
        document.getElementById("phone1").value,

        phone2:
        document.getElementById("phone2").value,

        city:
        document.getElementById("city").value,

        payMonth:
        document.getElementById("payMonth").value

    };

    localStorage.setItem(
        "schoolSettings",
        JSON.stringify(newSettings)
    );

    document.getElementById("msg").innerHTML =
    "✅ Settings saved successfully.";

}