function paPageOpen() {
    var pa_cover = document.getElementById("paCover");
    var pa_content = document.getElementById("paContent");
    
    pa_cover.className = "pa-page-open";

    setTimeout(function(){ pa_content.className += " pa-content-show"; }, 2000);
}
