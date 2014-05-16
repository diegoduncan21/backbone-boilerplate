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
        new EventModel({id: 1, name: "nombre del evento 1", owner: "dueño del evento 1"}), 
        new EventModel({id: 2, name: "nombre del evento 2", owner: "dueño del evento 2"}), 
        new EventModel({id: 3})
      ]);
    }
  });
 
  return EventsCollection;
});