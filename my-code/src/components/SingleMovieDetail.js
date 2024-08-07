import React from 'react'
import { APP_NAME } from "../constants";
import { TopBtn } from "./TopBtn";
import { Link } from 'react-router-dom';
import noImg from "./../assets/no-image.png";

function Metadata(props) {

    return (
        <>
            <div className="detail-item">
                <img alt={props.alt} title={props.alt} src={props.img} />
                <h4>{props.text}</h4>
            </div>


        </>
    )
}

export function SingleMovieDetail(props) {
    document.title = `${props.item.Title} | ${APP_NAME}`;
    let noImage = noImg;

    return (
        <>
            <div className="movie">

                <div className="metadata">
                    <h1>{props.item.Title} ({props.item.Year})</h1>
                    <h3>{props.item.Plot}</h3>
                    <hr></hr>

                    <Metadata img="https://img.icons8.com/color/48/000000/rating-circled.png"
                        text={props.item.Rated}
                        alt="Rated"
                    />
                    <Metadata img="https://img.icons8.com/color/48/000000/imdb.png"
                        text={props.item.imdbRating}
                        alt="IMDB Rating"
                    />

                    <Metadata img="https://img.icons8.com/color/48/000000/elections.png"
                        text={props.item.imdbVotes}
                        alt="IMDB votes"
                    />
                    <Metadata img="https://img.icons8.com/color/48/000000/calendar.png"
                        text={props.item.Released}
                        alt="Released date"
                    />


                    <Metadata img="https://img.icons8.com/color/48/000000/hourglass.png"
                        text={props.item.Runtime}
                        alt="Runtime"
                    />
                    <Metadata img="https://img.icons8.com/color/48/000000/language-skill.png"
                        text={props.item.Language}
                        alt="Language"
                    />

                    <Metadata img="https://img.icons8.com/color/48/000000/worldwide-location.png"
                        text={props.item.Country}
                        alt="Country"
                    />

                    <Metadata img="https://img.icons8.com/color/48/000000/tag.png"
                        text={props.item.Type}
                        alt="Type"
                    />


                    <Metadata img="https://img.icons8.com/color/48/000000/trophy.png"
                        text={props.item.Awards}
                        alt="Awards"
                    />

                    <Metadata img="https://img.icons8.com/color/48/000000/comedy.png"
                        text={props.item.Genre}
                        alt="Genre"
                    />
                    <Metadata img="https://img.icons8.com/color/48/000000/camping-chair.png"
                        text={props.item.Director}
                        alt="Director"
                    />


                    <Metadata img="https://img.icons8.com/color/48/000000/crowd.png"
                        text={props.item.Actors}
                        alt="Actors"
                    />
                    <br></br>
                    <Link to="/">
                        <button>NEW SEARCH</button>
                    </Link>

                </div>
                <div className="poster">
                    <img className="cinema-border" src={props.item.Poster === "N/A" ? noImage : props.item.Poster} alt={props.item.Title} title={props.item.Title}></img>

                </div>
            </div>

            <TopBtn />

        </>
    );

}