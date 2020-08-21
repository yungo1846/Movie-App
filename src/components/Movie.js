import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({
  id,
  year,
  title,
  summary,
  poster,
  genres,
  bg_poster,
  runtime,
  rating,
}) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
          bg_poster,
          runtime,
          rating,
        },
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__date">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
