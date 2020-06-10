import React, { useRef, useEffect } from 'react'

export function Search(props) {
    const inputMovie = useRef(null);

    useEffect(() => {
        inputMovie.current.focus();
    }, [props.changeFun]);

    return (
        <>
            <div className="search">
                <input id="q" ref={inputMovie} onChange={props.changeFun} placeholder={props.placeholder}></input>
                <button disabled={props.disabled} onClick={props.clickFun}>SEARCH</button>
                
                <small id="hint"></small>
            </div>

        </>
    );
}
