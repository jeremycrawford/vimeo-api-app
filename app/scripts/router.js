var MainRouter = Backbone.Router.extend({
  routes: {
    "poler/:videos" : "polerVideo"
  }
})

initialize: function(){
    this.videos = new VideosCollection;
    this.videos.on('add', function(video){ // Ask about this?
      new VideoView({model: video})
    })
  },
 
  polerVideo: function(videos){
    //"http://vimeo.com/api/v2/polerstuff/videos.json?callback=myFunction"
      this.videos.url = "http://vimeo.com/api/v2/polerstuff/videos.json?callback=myFunction"
    }
    this.items.fetch();
  }
});