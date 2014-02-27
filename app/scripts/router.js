var MainRouter = Backbone.Router.extend({

  routes: {
    "poler/:videos" : "polerVideo"
  },

  initialize: function(){

    this.videos = new VideosCollection;
    this.videos.on('add', function(video){
      new MainView({model: video})

    })

  },

  polerVideo: function(){

    this.videos.fetch({});

    console.log('show me the money honey')
  }

});











