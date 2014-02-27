var MainView = Backbone.View.extend({

  createTemplate: _.template($('#new-video-template').text());

  initialize: function(){

    $('.marketing').append(this.el);
    this.render()
  },
  render: function(){
    this.$el.html(this.model.get('id'));
  }
})