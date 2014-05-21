define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/news/form.html',
  'modules/collections/News'
], function($, _, Backbone, Handlebars, newsFormTemplate, NewsCollection){

  var NewsAddView = Backbone.View.extend({
    el: ".main",
    template: Handlebars.compile(newsFormTemplate),
    
    events: {
        submit: "addNews"  
    },
    
    render: function(){
      this.$el.html(this.template);
      return this;
    },
    
    addNews: function() {
      event.preventDefault();
      alert("aca procesar el form");
      
      this.collection.create({
          name: this.$('input[name=name]').val(),
          key: this.$('input[name=key]').val()
      });
      
      Backbone.history.navigate('#admin/news', true); 
    }

  });

  return NewsAddView;
  
});