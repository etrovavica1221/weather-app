import React from 'react';

const SearchForm = (props) => {
    return(
    <>
        <form>
            <input type="text" onChange={props.handleSearch}>
            </input>
            <button onClick={props.changeLocation}>
                Search
            </button>   
        </form>
    </>
    )
}

export default SearchForm;