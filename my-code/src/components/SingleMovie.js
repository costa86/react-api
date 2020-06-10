import React from 'react'
import { Link } from "react-router-dom";

export function SingleMovie(props) {
    return (

        <>
            <div className="item">
                <Link to={"/title/" + props.item.imdbID}>
                    <img src={props.item.Poster} alt={props.item.Title} title={props.item.Title}></img>
                </Link>
            </div>
        </>


        /*       <tr>
                  <td>{props.item.Title}</td>
                  <td>{props.item.Year}</td>
                  <td>{props.item.Type}</td>
                  <Link to={"/title/" + props.item.imdbID}>
                      <td><img className="zoom" width="45%" src={props.item.Poster} alt={props.item.Title} title={props.item.Title}></img></td>
                  </Link>
              </tr> */
    );

}