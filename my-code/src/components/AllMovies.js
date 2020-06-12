import React from "react";
import { SingleMovie } from "./SingleMovie";
import { TopBtn } from "./TopBtn";

export function AllMovies(props) {

    const allMovies = props.movies.map((movie) => (
        <SingleMovie key={movie.imdbID} item={movie} />
    ));

    return (
        <>
            <h3 className="results-for">Results found: {props.movies.length}</h3>

            <div className="results">
                {allMovies}
            </div>
            <TopBtn />
        </>
    );

}