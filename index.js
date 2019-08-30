// document.getElementById("id-menu-bar").onclick = function() {
//   window.location.href = "C:/Users/karii/trainee_sciensa/js-dom-challenge/genero/index.html"
// } 

// document.getElementById("id-menu-bar").onclick = function() {
//     window.location.href = "file:///C:/Users/karii/trainee_sciensa/js-dom-challenge/genero/index.html"
// }
// document.getElementById("id-menu-bar").onclick = function redirecionar() {
//     window.location.href = "file:///C:/Users/karii/trainee_sciensa/js-dom-challenge/genero/index.html"
// }

// let addgenero = document.getElementById("id-menu-bar");
// addgenero.addEventListener("click", redirecionar, false);

// document.getElementById("id-menu-bar").addEventListener("click", redirecionar);

function redirecionar() {
    document.getElementById("id-menu-bar").innerHTML='<object type="text/html" data="../genero/index.html" ></object>';
}
