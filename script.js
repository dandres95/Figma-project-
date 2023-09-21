const $movieBanner = document.querySelector(".js-movie-banner");
const $movieImage = document.querySelector(".js-container1");
const $moviesContainer = document.querySelector(".js-container2");
const $showsContainer = document.querySelector(".js-container3");
const $genreFirstMovie = document.querySelector(".genre1");

const chargeMovie = async () => {
  const answear = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
  );

  const data = await answear.json();

  console.log(data);

  const movies = data.results.slice(1, 6);

  const firstMovie = data.results[0];
  $movieBanner.innerHTML = `
    <h2>${firstMovie.original_title}</h2>
    <h3>${firstMovie.overview}</h3>
    <button class="button1">Watch now</button>
  `;

  $movieImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${firstMovie.backdrop_path})`;

  let cardsMovie = "";

  movies.forEach((movie) => {
    cardsMovie += `
    <div class="card" style="background-image: url('https://image.tmdb.org/t/p/original${movie.poster_path}')">
      <h1></h1>
      <div class="rating1">
        <img src="./Star Fill.png" />
        <img src="./Star Fill.png" />
        <img src="./Star Fill.png" />
        <img src="./Star Fill.png" />
        <img src="./Star Fill.png" />
      </div>
      <h2>${movie.original_title}</h2>
    </div>
  `;
  });

  $moviesContainer.innerHTML = cardsMovie;
};

chargeMovie();

const chargeShows = async () => {
  const answearShow = await fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
  );

  const dataShow = await answearShow.json();
  console.log(dataShow);

  const shows = dataShow.results.slice(1, 4);
  console.log(shows);

  const chargeGenres = async () => {
    const answearGenres = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
    );

    const dataGenres = await answearGenres.json();
    console.log(dataGenres);
  };

  chargeGenres();

  
  let cardShow = "";

  shows.forEach((show) => {
    cardShow += `
    <div class="got" style="background-image: url('https://image.tmdb.org/t/p/original${show.poster_path}')">
        <h1></h1>
        <div class="rating1">
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
          <img src="./Star Fill.png" />
        </div>
        <h2>${show.original_name}</h2>
      </div>
    `;
  });

  $showsContainer.innerHTML = cardShow;
};

chargeShows();
