const news = require("./news.json");

module.exports = function() {
  return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
};
