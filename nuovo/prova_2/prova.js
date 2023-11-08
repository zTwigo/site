// Resize event
window.addEventListener("resize",function(){
    // Get the window height and width
    var height = document.innerHeight
    var width = document.innerWidth
    // Get the objects
    const container = document.getElementById("container-js")
    // Check the value
    if(height>=700){
        document.body.style.height = "" + height + "px"
    }
})
function onMouseOver(elemento){
    elemento.style.transition = "all 1s";
    elemento.parentElement.style.transition = "all 1s";
    elemento.parentElement.style.transform = "scale(1.1)";
    elemento.classList.add("font-effect-fire");
    elemento.classList.add("font-effect-fire-animation");
}
function onMouseOut(elemento){
    elemento.style.transition = "all 1s";
    elemento.parentElement.style.transition = "all 1s";
    elemento.parentElement.style.transform = "scale(1.0)";
    elemento.classList.remove("grande");
    elemento.classList.remove("font-effect-fire");
    elemento.classList.remove("font-effect-fire-animation");
}
