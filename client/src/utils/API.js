import axios from "axios";

export default {
  // Gets news from the news API
  getNews: function() {
    return axios.get("/api/news");
  },
  // Saves a news to the database
  saveNews: function(newsData) {
    return axios.post("/api/news", newsData);
  },
  deleteNews: function() {
    return axios.delete("/api/news");
  }
};
