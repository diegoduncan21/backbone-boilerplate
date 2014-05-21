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
        new NewsModel({id: 1, owner: "dueño de la noticia 1", urlImage: "http://isitpyconyet.com/pycon2014.png"}), 
        new NewsModel({id: 2, owner: "dueño de la noticia 2", urlImage: "http://isitpyconyet.com/pycon2014.png"}), 
        new NewsModel({id: 3, owner: "dueño de la noticia 3", urlImage: "http://isitpyconyet.com/pycon2014.png"})
      ]);
    }
  });
 
  return NewsCollection;
});