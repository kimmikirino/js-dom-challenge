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

let genre = document.getElementById('genre-details');

/**
 * Utilizando join:
 */
genre.innerHTML = data.map(
    genreItem => `<p class="genre-items"> ${genreItem.id}. ${genreItem.description} </p>`
).join('');

/**
 * Utilizando foreach:
 */
// let dataGenre = data.map(
//     genreItem => `<p> ${genreItem.id}. ${genreItem.description} </p>`
// )

// dataGenre.forEach(element => {
//     genre.innerHTML = genre.innerHTML + element
// });

let home = document.getElementById("id-logo");

home.addEventListener('click', (evento) => {
    window.location.href = "../index.html";
})