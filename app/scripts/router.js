var MainRouter = Backbone.Router.extend({
  routes: {
    "poler/:videos" : "polerVideo"
  }
})

initialize: function(){
    this.videos = new VideosCollection;
    this.videos.on('add', function(item){
      new VideoView({model: item})
    })
  },
 
  showShops: function(videos){
    if (keyword) {
      this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"
    }
    this.items.fetch();
  }
});