// Index for the search folder
import React, { Component } from "react";
import axios from "axios"; 

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        const apiUrl=`https://newsapi.org/v2/top-headlines?q=${this.state.value}&country=us&apiKey=a8e6c51a2f8b46f7a40bb49a66178133`
        axios.get(apiUrl)
        .then(response => {
            console.log(response)
            return response 
        })
        .then(data => {
            if (this.props.onResult){
                this.props.onResult(data)
            }
        })
    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="search..." />
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