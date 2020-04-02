// Index for the search folder
import React, { Component } from "react";

class Search extends Component {
    state = {};
    
    handleFormSubmit(event){
        event.preventDefault()
    console.log("spitout")
    }

    render() {
        return (   
        <form>
            <input type="text" placeholder="search..."/>
            <button
          onClick={this.handleFormSubmit}
          type="submit"
        >
          Search
        </button>
        </form> 
        );
    }
}

export default Search;