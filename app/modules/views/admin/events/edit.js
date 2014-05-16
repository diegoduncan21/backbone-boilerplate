define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/events/edit.html',
  'modules/collections/Event'
], function($, _, Backbone, Handlebars, eventEditTemplate, EventsCollection){

  var EventDetalView = Backbone.View.extend({
    el: ".main",
    template: Handlebars.compile(eventEditTemplate),

    initialize: function(options){
      console.log(options.event_id);
      this.render(options.event_id);
    },
    render: function(event_id){
      var eventsCollection = new EventsCollection();
      var eventSelected = eventsCollection.get(event_id);
      this.$el.html(this.template({event: eventSelected.toJSON()}));
      return this;
    }

  });

  return EventDetalView;
  
});