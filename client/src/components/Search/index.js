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
            .then(res =>
                this.getSearchTopic()
                )
    }

    handleButtonSubmit= term => event => {
        event.preventDefault()
        const apiUrl = `https://newsapi.org/v2/top-headlines?q=${term}&country=us&apiKey=a8e6c51a2f8b46f7a40bb49a66178133`
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
            <div className="jumbotron">
            <nav className="navbar navbar-dark bg-light mb-2 justify-content-between">
                <img className="logo" src='https://library.kissclipart.com/20180905/eqe/kissclipart-read-glasses-icon-clipart-glasses-computer-icons-5306d0a60e989aad.jpg' />
                <a className="navbar-brand ">  News Feed</a>
                <form className="form-inline ">
                    <input className="form-control mr-sm-2" type="text" onChange={this.handleChange} value={this.state.value} placeholder="....." />
                    <button className="btn btn-outline-success btn-sm"
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
                <div></div>
                   <button className="btn btn-primary>"    
                       onClick={() => this.handleClearButton()}
                       type="submit"> CLEAR
                    </button>                        
                </div>
                
                <div className="container-fluid">
                    {this.state.data.map(item => (
                        <div className="row" key={item.title}>
                            <div className="col-9">{item.title}: {item.author}</div>
                            <br></br>
                            <div className="col-4"> <img src={item.urlToImage} /> </div>
                            <div className="col-6"> {item.description} <div> {item.content}</div></div>
                            <a href={item.url}> Direct Link... </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Search;
