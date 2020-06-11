import React from 'react'
import { APP_NAME } from "../constants";
import { TopBtn } from "./TopBtn";

function Metadata(props) {
    return (
        <>
            <td>
                <img alt={props.alt} title={props.alt} src={props.img} />
            </td>
            <td><h4>{props.text}</h4> </td>

        </>
    )
}

export function SingleMovieDetail(props) {
    document.title = `${props.item.Title} | ${APP_NAME}`;

    return (
        <>
            <div className="movie">

                <div className="metadata">
                    <h1>{props.item.Title} ({props.item.Year})</h1>
                    <h3>{props.item.Plot}</h3>
                    <hr></hr>
                    <table>
                        <tr>
                            <Metadata img="https://img.icons8.com/color/48/000000/rating-circled.png"
                                text={props.item.Rated}
                                alt="Rated"
                            />
                            <Metadata img="https://img.icons8.com/color/48/000000/imdb.png"
                                text={props.item.imdbRating}
                                alt="IMDB Rating"
                            />
                            <Metadata img="https://img.icons8.com/color/48/000000/calendar.png"
                                text={props.item.Released}
                                alt="Released date"
                            />

                        </tr>

                        <tr>
                            <Metadata img="https://img.icons8.com/color/48/000000/hourglass.png"
                                text={props.item.Runtime}
                                alt="Runtime"
                            />

                            <Metadata img="https://img.icons8.com/color/48/000000/comedy.png"
                                text={props.item.Genre}
                                alt="Genre"
                            />
                            <Metadata img="https://img.icons8.com/color/48/000000/camping-chair.png"
                                text={props.item.Director}
                                alt="Director"
                            />
                        </tr>

                        <tr>

                            <Metadata img="https://img.icons8.com/color/48/000000/trophy.png"
                                text={props.item.Awards}
                                alt="Awards"
                            />

                            <Metadata img="https://img.icons8.com/color/48/000000/crowd.png"
                                text={props.item.Actors}
                                alt="Actors"
                            />

                            <Metadata img="https://img.icons8.com/color/48/000000/language-skill.png"
                                text={props.item.Language}
                                alt="Language"
                            />
                        </tr>

                        <tr>
                            <Metadata img="https://img.icons8.com/color/48/000000/worldwide-location.png"
                                text={props.item.Country}
                                alt="Country"
                            />
                        </tr>

                    </table>

                </div>
                <div className="poster">
                    <img className="cinema-border" src={props.item.Poster} alt={props.item.Title} title={props.item.Title}></img>

                </div>
            </div>

            <TopBtn />

        </>
    );

}