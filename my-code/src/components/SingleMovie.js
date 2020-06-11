import React from 'react'
import { Link } from "react-router-dom";

export function SingleMovie(props) {

    let noImage = "https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png";
    return (

        <>
            <div className="item cinema-border">
                <Link to={"/title/" + props.item.imdbID}>
                    <img src={props.item.Poster === "N/A" ? noImage : props.item.Poster} alt={props.item.Title} title={props.item.Title}></img>
                </Link>
                <p className="text">{props.item.Title}</p>
            </div>
        </>
    );

}