var FeaturedView = Backbone.View.extend({

  className: "featured",
  mainTemplate: _.template($('#featured-template').text()),

  initialize: function(){
    console.log('view is showing')
    $('.main-featured-video').html(this.el);
      this.render();
  },
  render: function(){
    var mainRenderedTemplate = this.mainTemplate(this.model.attributes);
    this.$el.html(mainRenderedTemplate);
  },

});