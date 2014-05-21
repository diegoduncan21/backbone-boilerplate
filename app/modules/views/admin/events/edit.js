define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/events/form.html',
  'modules/collections/Event'
], function($, _, Backbone, Handlebars, eventFormTemplate, EventsCollection){

  var EventDetalView = Backbone.View.extend({
    el: ".main",
    template: Handlebars.compile(eventFormTemplate),
    
    events: {
      "click .add": "editEvent",
      "click .del": "delEvent"   
    },
    
    initialize: function(options) {
      this.render(options.id);
    },
    render: function(event_id) {
      var eventsCollection = new EventsCollection();
      var eventSelected = eventsCollection.findWhere({id: Number(event_id)});
      this.model = eventSelected;
      this.$el.html(this.template({event: eventSelected.toJSON()}));
      return this;
    },
    editEvent: function(event) {
       event.preventDefault();
      
      alert("me editaron");
      return false;
    },
    delEvent: function(event) {
      event.preventDefault();
      
      that = this;
      this.model.destroy({
        success: function() {
          console.log(that.parent.collection);
          Backbone.history.navigate('#admin/events', true);
        }
      });
    }

  });

  return EventDetalView;
  
});