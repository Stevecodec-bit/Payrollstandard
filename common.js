// =====================================
// COMMON SETTINGS
// Used by every page
// =====================================

const settings = JSON.parse(
    localStorage.getItem("schoolSettings")
);

if (settings) {

    // School Name
    document.querySelectorAll(".school-name").forEach(function(el){
        el.textContent = settings.schoolName;
    });

    // Motto
    document.querySelectorAll(".school-motto").forEach(function(el){
        el.textContent = settings.motto;
    });

    // Address
    document.querySelectorAll(".school-address").forEach(function(el){
        el.textContent = settings.address;
    });

    // Phones
    document.querySelectorAll(".school-phone").forEach(function(el){
        el.textContent =
            settings.phone1 + " | " + settings.phone2;
    });

    // Payroll Month
    document.querySelectorAll(".pay-month").forEach(function(el){
        el.textContent = settings.payMonth;
    });

}