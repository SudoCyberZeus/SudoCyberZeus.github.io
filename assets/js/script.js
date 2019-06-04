var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("paContent").style.display = "grid";
    document.getElementById("paContent").style.animation = "fadeIn 6s";
}