const url = 'http://www.omdbapi.com/?apikey=25dd6efd&';
const button = document.querySelector("button");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

button.addEventListener("click", e =>{
    e.preventDefault();
    const search = url + 't=' + document.getElementById("search").value.trim();
    fetchData(search);
    form.reset();
    // console.log(search);
});


function fetchData(search){
    // console.log(search);
    fetch(search).then((response) => {
    // console.log('resolved', response);
    return response.json();
    }).then((data)=> {
        display(data);
    })
    .catch((err) =>
    {
        // console.log('rejected', err);
    });
}

function display(data){
    const dis = `
    <li>Moive : ${data.Title}</li>
    <li>Year : ${data.Year}</li>
    <li>Language : ${data.Language}</li>
    <li>Rated : ${data.Rated}</li>
    <li>Movie Type : ${data.Type}</li>
    <li>Genre : ${data.Genre}</li>
    <li>Actors : ${data.Actors}</li>
    <li>IMDB Ratings : ${data.imdbRating}</li>
    `;    
    ul.innerHTML = dis;
}