import React from "react";

const MovieList = (props) => {

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength ) return string;
    return `${string.substring(0, maxLength)} ...`;
}
  

  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-3 mb-3" key={movie.id}>
          <div className="card-md-4 h-100 border border-danger shadow-sm">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{truncateOverview(movie.title, 15)}</h5>
              <p className="card-text">{truncateOverview(movie.overview, 90)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">
                  Delete
                </button>
                <h2>
                  <span className="badge bg-info">{movie.vote_average}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
