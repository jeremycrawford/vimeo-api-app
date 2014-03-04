var MainRouter = Backbone.Router.extend({
  routes: {

    "poler/:videos" : "polerVideo"

  },

  initialize: function(){
    this.videos = new VideosCollection;
  },
  
  polerVideo: function(){
   var cool = this.videos.fetch();
    this.videos.on('add', function(video){
      if ($('.small-videos').children().length < 5) {
        new ListView({model: video})
      }
    })
  }
});

console.log('How is my router doing?');



  // goHome: function() {
  //   var home = this.videos.fetch();
  //   if ($('.main-featured-video').children().length < 0) {
  //     new FeaturedView({model: video})
  //   }
  // }






















