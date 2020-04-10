// Index for the search folder
import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "", data: [], news: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    componentDidMount() {
        this.getSearchTopic ()
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    
    }
    handleFormSubmit(event) {
        event.preventDefault()
        const apiUrl = `https://newsapi.org/v2/top-headlines?q=${this.state.value}&country=us&apiKey=a8e6c51a2f8b46f7a40bb49a66178133`
        axios.get(apiUrl)
            .then(response => {
                console.log(response)
                this.setState({ data: response.data.articles })
            })

            API.saveNews({ Topic: this.state.value})
    }

    getSearchTopic = () => {
        API.getNews()
        .then(res =>
            this.setState({
              news: res.data
            })
          )
          .catch(() =>
            this.setState({
              news: [],
              message: "No Saved Topic"
            })
          );
    }

    render() {
        return (
            <div class="jumbotron">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light mb-2 justify-content-between">
                <img src='https://library.kissclipart.com/20180905/eqe/kissclipart-read-glasses-icon-clipart-glasses-computer-icons-5306d0a60e989aad.jpg' />
                <a className="navbar-brand ">  News Feed</a>
                <form className="form-inline ">
                    <input className="form-control mr-sm-2" type="text" onChange={this.handleChange} value={this.state.value} placeholder="....." />
                    <button className="btn btn-outline-success btn-sm"
                        onClick={this.handleFormSubmit}
                        type="submit">Search
                </button>
                </form>
                </nav>
                <div class="container">
                   {this.state.news.map(item => (
                   <button className="btn btn-primary>"    
                       onClick={this.handleFormSubmit}
                       type="submit">{item.Topic}
                    </button>
                 ))}
                </div>
                <div>
                    {this.state.data.map(item => (
                        <ul key={item.title}>
                            <li> <img src={item.urlToImage} /> </li>
                            <li>{item.title}, {item.author}</li>
                            <li>{item.description}</li>
                            <li>{item.content}</li>
                            <li><a href={item.url}> More... </a></li>
                        </ul>
                    ))}
                </div>
                </div>
        );
    }
}
export default Search;
