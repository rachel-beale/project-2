import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StarRating from 'stars-rating'


const Movie = (props) => {
  const movieId = props.match.params.movieId
  const [movie, updateMovie] = useState([])
  { console.log(movieId) }

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=a48a3d11&i=${movieId}`)
      .then(resp => {
        updateMovie(resp.data)
      })
  }, [])

  return <section id="movie">
    <div className="container is-centered">
      <div id="movie-container" className="tile is-ancestor">
        <div className="tile is-mobile is-parent">
          <div className="tile is-child box">
            <div className="card-image">
              <figure className="image is-4by5">
                <img src={movie.Poster} alt={movie.Title} />
              </figure>
            </div>
          </div>
          <div className="tile is-vertical is-parent">
            <div className="tile is-child box">
              <h1 className="is-family-code title has-text-centered has-text-black">{movie.Title}</h1>
              <p className="is-family-code is-size-4 has-text-weight-bold">IMDB Rating</p>
              <div id="stars"></div>
              <StarRating half={true} edit={false} value={movie.imdbRating} count={10} size={24} color2={'#ffd700'} />
              <p className="is-family-code is-size-4 has-text-weight-bold">Plot:</p>
              <p className="is-family-code is-size-5">{movie.Plot}</p>
            </div>
            <div className="tile is-child box">
              <p className="has-text-centered is-family-code subtitle is-size-4 has-text-weight-bold">More Info</p>
              <p className="is-family-code is-size-5">Director: {movie.Director}  </p>
              <p className="is-family-code is-size-5">Runtime: {movie.Runtime}</p>
              <p className="is-family-code is-size-5">Movie awards: {movie.Awards}</p>
              <p className="is-family-code is-size-5">{movie.Language}</p>
              <p className="is-family-code is-size-5">Actors: {movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Movie