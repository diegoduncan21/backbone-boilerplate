define([
  'jquery',
  'underscore',
  'backbone',
  'modules/models/News'
], function($, _, Backbone, NewsModel){
  var NewsCollection = Backbone.Collection.extend({
    model: NewsModel,
    
    initialize: function(){
      this.add([
        new NewsModel({id: 4, owner: "dueño de la noticia 1"}), 
        new NewsModel({id: 5, owner: "dueño de la noticia 2"}), 
        new NewsModel({id: 6})
      ]);
    }
  });
 
  return NewsCollection;
});