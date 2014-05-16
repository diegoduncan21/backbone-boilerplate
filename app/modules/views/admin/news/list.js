define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/news/list.html',
  'modules/collections/News',
  'modules/views/admin/news/edit',
], function($, 
            _, 
            Backbone, 
            Handlebars, 
            newsTemplate, 
            NewsCollection,
            NewsEditView) {
  var NewsView = Backbone.View.extend({
    el: '.main',
    events: {
      "click .register" : "clickeable"
    },
    template: Handlebars.compile(newsTemplate),
    render: function(){
      var newsCollection = new NewsCollection();
      this.$el.html(this.template({news: newsCollection.toJSON()}));
      return this;
    },
    clickeable: function(event) {
      event.stopImmediatePropagation();
      var news_id = $(event.currentTarget).attr("data");
      var newsEditView = new NewsEditView({news_id: news_id});
      return false;
    }

  });

  return NewsView;
  
});