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
    template: Handlebars.compile(newsTemplate),
    render: function(){
      var newsCollection = new NewsCollection();
      this.$el.html(this.template({news: newsCollection.toJSON()}));
      return this;
    }

  });

  return NewsView;
  
});