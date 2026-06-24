const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = function() {
  const newsPath = path.join(__dirname, "news.yaml");
  const fileContents = fs.readFileSync(newsPath, "utf8");
  const news = yaml.load(fileContents);
  return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
};

