var MainView = Backbone.View.extend({

  createTemplate: _.template($('#videos-template').text()),

  initialize: function(){
    console.log('view is showing')

    $('.jumbotron').append(this.el);
      this.render();
    console.log('render is rendering')

  },

  render: function(){

    this.$el.html(this.createTemplate(this.model));

  }

})