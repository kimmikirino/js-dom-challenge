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

//let genero = document.getElementsByClassName('genre-details')
let genero = document.getElementsByClassName('genre-details');

//genero[0].innerHTML = data.map(genero => `${genero.id} - ${genero.description}`);

genero[0].innerHTML = data.map(
    genero => `<p> ${genero.id} - ${genero.description} </p>`
).join('');
