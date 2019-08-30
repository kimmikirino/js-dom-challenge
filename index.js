
const data = [
    {
        id: 1,
        description: 'Drama'
    },
    {
        id: 2,
        description: 'Comédia',
    },
    {
        id: 3,
        description: 'Suspense'
    },
    {
        id: 4,
        description: 'Ficção'
    },
    {
        id: 5,
        description: 'Terror'
    },
    {
        id: 6,
        description: 'Comédia romântica'
    },
    {
        id: 7,
        description: 'Ficção científica'
    },
    {
        id: 8,
        description: 'Desenho'
    }
]

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

let addgenero = document.getElementsByClassName("menu-bar");
addgenero.addEventListener('click', (evento) => {
    addgenero[0].innerHTML = "/home/trainee2019/DOM/js-dom-challenge/genero/index.html"
})

// function redirecionar() {
//     document.getElementById("id-menu-bar").innerHTML='<object type="text/html" data="../genero/index.html" ></object>';
// }

