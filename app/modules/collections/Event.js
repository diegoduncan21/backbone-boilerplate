define([
  'jquery',
  'underscore',
  'backbone',
  'modules/models/Event'
], function($, _, Backbone, EventModel){
  var EventsCollection = Backbone.Collection.extend({
    model: EventModel,
    
    initialize: function(){
      this.add([
        new EventModel({id: 1, name: "nombre del evento 1", owner: "dueño del evento 1", urlImage:"http://static.tumblr.com/34048f704d210cde027e06cc77c8316f/iyst6gu/D8Dmk9tcd/tumblr_static_pycon_header.jpg"}), 
        new EventModel({id: 2, name: "nombre del evento 2", owner: "dueño del evento 2", urlImage:"http://static.tumblr.com/34048f704d210cde027e06cc77c8316f/iyst6gu/D8Dmk9tcd/tumblr_static_pycon_header.jpg"}), 
        new EventModel({id: 3, name: "nombre del evento 3", owner: "dueño del evento 2", urlImage:"http://static.tumblr.com/34048f704d210cde027e06cc77c8316f/iyst6gu/D8Dmk9tcd/tumblr_static_pycon_header.jpg"})
      ]);
    }
  });
 
  return EventsCollection;
});