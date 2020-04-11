// Index for the search folder
import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "", data: [], news: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    componentDidMount() {
        this.getSearchTopic()
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })

    }
    handleFormSubmit(event) {
        event.preventDefault()
        const apiUrl = `https://newsapi.org/v2/everything?language=en&q=${this.state.value}&apiKey=a8e6c51a2f8b46f7a40bb49a66178133`
        axios.get(apiUrl)
            .then(response => {
                console.log(response)
                this.setState({ data: response.data.articles })
            })

        API.saveNews({ Topic: this.state.value })
            .then(res =>
                this.getSearchTopic()
            )
    }

    handleButtonSubmit = term => event => {
        event.preventDefault()
        const apiUrl = `https://newsapi.org/v2/everything?language=en&q=${this.term}&apiKey=a8e6c51a2f8b46f7a40bb49a66178133`
        axios.get(apiUrl)
            .then(response => {
                console.log(response)
                this.setState({ data: response.data.articles })
            })
    }

    handleClearButton = () => {
        API.deleteNews()
            .then(res =>
                this.getSearchTopic()
            )
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
            <div>
            <nav className="navbar navbar-dark bg-light mb-2 justify-content-between">
                <img className="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0HxBYbub46oCMoThlhz__EcpISTacV3UaKCsC33b8PYBvx5M4&usqp=CAU' />
                <a className="navbar-brand ">  News Feed
                <img className="icon inline size-sm" src='https://library.kissclipart.com/20180905/eqe/kissclipart-read-glasses-icon-clipart-glasses-computer-icons-5306d0a60e989aad.jpg' /></a>
                <form className="form-inline"> 
                    <input className="form" type="text" onChange={this.handleChange} value={this.state.value} placeholder="....." />
                    <button className="btn btn-outline-success"
                        onClick={this.handleFormSubmit}
                        type="submit">Search
                </button>
                </form>
            </nav>
            <div className="container">
             {this.state.news.map(item => (
                    <button key={item.Topic} className="btn btn-primary>"
                        onClick={this.handleButtonSubmit(item.Topic)}
                        type="submit">{item.Topic}
                    </button>
                ))}
                <button className="btn btn-primary>"
                    onClick={() => this.handleClearButton()}
                    type="submit"> CLEAR
                    </button>
            </div>
                <div className="jumbotron"> <h1> Today's Topic </h1>
                {this.state.data.map(item => (
                    <div className="row" key={item.title}>
                        <div className="col-9">{item.title}: {item.author}</div>
                        <br></br>
                        <div className="col-4"> <img className= "url" src={item.urlToImage} /> </div>
                        <div className="col-6"> {item.description} 
                        <div> {item.content}</div>
                        <div><a className="source" href={item.url} > Source Name: {item.source.name} </a></div></div>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}
export default Search;
