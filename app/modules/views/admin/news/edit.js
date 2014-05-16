define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/news/edit.html',
  'modules/collections/News'
], function($, _, Backbone, Handlebars, newsEditTemplate, NewsCollection){

  var NewsDetalView = Backbone.View.extend({
    el: ".main",
    template: Handlebars.compile(newsEditTemplate),

    initialize: function(options){
      console.log(options.news_id);
      this.render(options.news_id);
    },
    render: function(news_id){
      var newsCollection = new NewsCollection();
      var newsSelected = newsCollection.get(news_id);
      this.$el.html(this.template({"new": newsSelected.toJSON()}));
      return this;
    }

  });

  return NewsDetalView;
  
});