import React from "react";
import { SingleMovie } from "./SingleMovie";
import { TopBtn } from "./TopBtn";

export function AllMovies(props) {

    const allMovies = props.movies.map((movie) => (
        <SingleMovie key={movie.imdbID} item={movie} />
    ));

    return (
        <>
            <div className="results">
                {allMovies}
            </div>
            <TopBtn />
        </>
    );

}