import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    //Link
} from "react-router-dom";
import { AllMoviesSearch } from "./AllMoviesSearch";
import { SingleMovieSearch } from "./SingleMovieSearch";

export function App() {
    return (
        <Router>
            <div>
         {/*        <nav >
                     <Link to="/">MOVIE SEARCH!</Link>
                </nav> */}
                <Switch>
                    <Route exact path="/">
                        <AllMoviesSearch />
                    </Route>
                    <Route path="/title/:id">
                        <SingleMovieSearch />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}