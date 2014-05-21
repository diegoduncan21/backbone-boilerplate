define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/events/list.html',
  'modules/collections/Event',
  'modules/views/admin/events/edit',
], function($, 
            _, 
            Backbone, 
            Handlebars, 
            eventTemplate, 
            EventsCollection,
            EventEditView) {
  var EventView = Backbone.View.extend({
    el: '.main',
    template: Handlebars.compile(eventTemplate),
    render: function(){
      var eventCollection = new EventsCollection();
      this.$el.html(this.template({events: eventCollection.toJSON()}));
      return this;
    },

  });

  return EventView;
  
});