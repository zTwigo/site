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