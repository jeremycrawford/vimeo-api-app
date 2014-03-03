var Video = Backbone.Model.extend({
});
var VideosCollection = Backbone.Collection.extend({
  model: Video,
  url: "http://vimeo.com/api/v2/polerstuff/videos.json?callback=?", // Add a keyword to this to be able to change by button select
});




