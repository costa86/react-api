import React from 'react'
import { Link } from "react-router-dom";

export function SingleMovie(props) {
    return (

        <>
            <div className="item">
                <Link to={"/title/" + props.item.imdbID}>
                    <img src={props.item.Poster} alt={props.item.Title} title={props.item.Title}></img>
                </Link>
                <p className="text">{props.item.Title}</p>
            </div>
        </>
    );

}