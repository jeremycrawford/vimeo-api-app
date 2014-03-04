var MainRouter = Backbone.Router.extend({
  routes: {

    "main"  : "mainVideoPage",
    "thumbs" : "polerVideoPage"

  },

  initialize: function(){
    this.videos = new VideosCollection;
  },
  
  polerVideoPage: function(){
   var cool = this.videos.fetch();
    this.videos.on('add', function(video){
      if ($('.small-videos').children().length < 8) {
        new ListView({model: video})
      }
    })
  },

// console.log('How is my router doing?');



  mainVideoPage: function() {
    var home = this.videos.fetch();
      this.videos.on('add', function(video){
        if ($('.featured-video').children().length < 1) {
          new FeaturedView({model: video})
        }
      })
  }  

});





















