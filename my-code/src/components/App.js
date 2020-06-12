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
                <Switch>
                    <Route exact path="/">
                        <AllMoviesSearch />
                    </Route>
                    <Route path="/title/:id">
                        <SingleMovieSearch />
                    </Route>

                </Switch>
                <div className="footer">
                    Handcrafted by Lourenço Costa, with:
                <br />

                    <img title="SASS" alt="SASS" src="https://img.icons8.com/color/48/000000/sass.png" />
                    <img title="React" alt="React" src="https://img.icons8.com/color/48/000000/react-native.png" />

                </div>
            </div>
        </Router>
    );
}