var MainRouter = Backbone.Router.extend({
  routes: {

    "poler/:videos" : "polerVideo",
    "poler/:home" : "goHome"

  },

  initialize: function(){
    this.videos = new VideosCollection;
  },
  
  polerVideo: function(){
   var cool = this.videos.fetch();
    this.videos.on('add', function(video){
      if ($('.featured-video').children().length < 5) {
        new ListView({model: video})
    }
  },

  goHome: function() {
    var home = this.videos.fetch();
    if ($('.main-featured-video').children().length < 0) {
      new FeaturedView({model: video})
    }
  }

});





















