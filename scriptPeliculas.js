"use strict";

const btnBuscar = document.querySelector("#searchButton");
btnBuscar.addEventListener("click", fetchData);

function fetchData() {
  const movie = document.querySelector("#searchInput").value;
  const url = "https://api.themoviedb.org/3/search/movie?query=";
  const api_key = "7c6f31205c9d4f45950df6b0f95065b4";

  fetch(`${url}${movie}&api_key=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrar(data.results));
}

function mostrar(data) {
    const urlImg = 'https://image.tmdb.org/t/p/w500';
  console.log(data);
  const div_resultados = document.querySelector("#results");
  div_resultados.textContent='';
  
  if(data.length==0){
    div_resultados.textContent = `No se encontraron resultados`;
    return
  }

  data.forEach((result) => {

    const box = document.createElement("div");
    box.classList.add('movie');

    const img = document.createElement('img');
    img.src=`${urlImg}${result.backdrop_path}`;

    const title = document.createElement('h2');
    title.textContent = result.title;

    const idioma = document.createElement('p');
    idioma.textContent = `Idioma Original: ${result.original_language}`;

    const fecha = document.createElement('p');
    fecha.textContent = `Fecha de lanzamiento: ${result.release_date}`;

    const overview = document.createElement('p');
    overview.textContent = result.overview;

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(idioma);
    box.appendChild(fecha);
    box.appendChild(overview);

    div_resultados.appendChild(box);
  });
}
