const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  Topic: { type: String, required: true }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
