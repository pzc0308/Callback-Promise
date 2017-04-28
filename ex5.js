const axios = require('axios');

function downloadMovie(movieName) {
    return axios
        .get(`http://omdbapi.com/?s=${movieName}`)
        .then(response => response.data.Search);
}

const movies = ['Star Wars', 'Lord of the Rings', 'Transformers']

const promises = movies.map(downloadMovie);

Promise
    .all(promises)
    .then(data => {
        data.forEach(function(d) {
            console.log(d)
        })
    });