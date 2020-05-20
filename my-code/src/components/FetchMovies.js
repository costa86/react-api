import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";

export function FetchMovies(props) {
    const [data, setData] = useState([]);

    async function getData() {
        try {
            let req = await fetch(props.url);
            let json = await req.json();
            setData(json.Search);

        } catch (error) {
            console.log(error);
        }
    }
    getData();

    let res = data.map(i => (
        <Movie item={i} />
    ));

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>YEAR</th>
                    </tr>
                </thead>
                <tbody>
                    {res}
                </tbody>
            </table>
        </>
    );
}