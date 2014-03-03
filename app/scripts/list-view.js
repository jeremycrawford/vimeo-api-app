var ListView = Backbone.View.extend({

  className: "thumbnails",
  createTemplate: _.template($('#videos-template').text()),

  events: {
    "click .thumbnails": "createFeaturedView"
  },

  initialize: function(){
    console.log('view is showing')
    $('.featured-video').append(this.el);
      this.render();
      this.listenTo(this.model, "change", this.render);
  },
  render: function(){
    this.$el.html(this.createTemplate(this.model));
  },
  createFeaturedView: function(){
    new FeaturedView( {model: this.model })
  }

});





