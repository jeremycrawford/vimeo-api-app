var ListView = Backbone.View.extend({

  className: "thumbnails",
  createTemplate: _.template($('#videos-template').text()),

  initialize: function(){
    console.log('view is showing')
    $('.small-videos').append(this.el);
      this.render();
      this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    console.log('shizer!!!');
    this.$el.html(this.createTemplate(this.model));
  }

});





