import React, { useState } from 'react'
import { API_KEY, APP_NAME } from "../constants";
import { useFetch } from "../hooks";
import { Search } from "./Search";
import { AllMovies } from "./AllMovies";

export function AllMoviesSearch() {
    const min = 3; // Min chars count to search
    const [query, setQuery] = useState(null);
    const [searchEnabled, setSearchEnabled] = useState(false); // for useFetch() 

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

    // Custom hook to make API requests (activation depends on "searchEnabled" arg)
    const [data, loading] = useFetch(url, query, searchEnabled);
    //
    const [btnDisabled, setBtnDisabled] = useState(true); // Submit button's status

    // Enables & makes the API request
    const search = () => {
        setSearchEnabled(true);
        document.title = `${query.toUpperCase()} | ${APP_NAME}`;
    }
    //

    // Enables/disables submit button & shows chars counter
    function enableBtn(e) {
        setSearchEnabled(false);
        let qry = e.target.value;
        setQuery(qry);
        const hint = document.getElementById("hint");
        setBtnDisabled(true);
        hint.innerHTML = `${qry.length}/${min}`;

        if (qry.length >= min) {
            setBtnDisabled(false);
            hint.innerHTML = "Cool! You can click on the search button now";
        }

    }
    //  

    const base = (
        <>
            <Search
                clickFun={search}
                changeFun={enableBtn}
                placeholder="Movies, series,etc..."
                disabled={btnDisabled} />
        </>
    );

    function hoverImg() {
        let samples = document.getElementsByClassName("sample");
        for (let i of samples) {
            i.addEventListener("mouseover", () => {
                let title = i.alt;
                document.getElementById("q").value = title;
                setBtnDisabled(false);
                const hint = document.getElementById("hint");
                hint.innerHTML = `Search for ${title}` ;
                setQuery(title);
            })
        }
    }

    // Actual content to be rendered, based on API request status
    switch (loading) {
        case "loading":
            return (<> {base} <h2>Loading...</h2> </>);
        case "notFound":
            return (<> {base} <h2>No results found...</h2> </>);
        case "error":
            return (<> {base} <h2>There was an error with the server...</h2> </>);
        case "done":
            return (
                <> {base}
                    <AllMovies movies={data.Search} />
                </>
            );
        default:
            return (
                <>
                    {base}
                    <h2 className="ideas-header">Out of ideas? Try one of these author's picks:</h2>
                    <div className="ideas">
                        <img onMouseOver={hoverImg} className="sample" title="Jurassic Park" alt="Jurassic Park" src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"></img>
                        <img onMouseOver={hoverImg} className="sample" title="The Shawshank Redemption" alt="The Shawshank Redemption" src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"></img>
                        <img onMouseOver={hoverImg} className="sample" title="Joker" alt="Joker" src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"></img>
                        <img onMouseOver={hoverImg} className="sample" title="Castlevania" alt="Castlevania" src="https://m.media-amazon.com/images/M/MV5BYWUwN2UwYTktMDk4OC00YTg0LThmNTItNWE3ZjQxOTIxZTg3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"></img>
                    </div>
                </>);
    }
    //

}