define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/news/form.html',
  'modules/collections/News'
], function($, _, Backbone, Handlebars, newsFormTemplate, NewsCollection){

  var NewsEditView = Backbone.View.extend({
    el: ".main",
    template: Handlebars.compile(newsFormTemplate),
    
    events: {
      "click add": "editNews",
      "click .del": "delNews"   
    },
    
    initialize: function(options){
      this.render(options.id);
    },
    render: function(news_id){
      var newsCollection = new NewsCollection();
      var newsSelected = newsCollection.findWhere({id: Number(news_id)});
      this.model = newsSelected;
      this.$el.html(this.template({"new": newsSelected.toJSON()}));
      return this;
    },
    editNews: function(event) {
      event.preventDefault();
      
      alert("me editaron");
      return false;
    },
    delNews: function(event) {
      event.preventDefault();
      
      that = this;
      this.model.destroy({
        success: function() {
          console.log(that.parent.collection);
          Backbone.history.navigate('#admin/news', true);
        }
      });
    }

  });

  return NewsEditView;
  
});