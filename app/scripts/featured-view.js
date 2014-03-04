var FeaturedView = Backbone.View.extend({

  className: "main-video",
  createTemplate: _.template($('#featured-template').text()),

  initialize: function(){
    console.log('view is showing')
    $('.featured-video').html(this.el);
      this.render();
      this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    console.log('shizer!!!');
    this.$el.html(this.createTemplate(this.model.attributes));
  }

});