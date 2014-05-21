define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!/app/templates/admin/events/form.html',
  'modules/collections/Event'
], function($, _, Backbone, Handlebars, eventFormTemplate, EventsCollection){

  var EventAddView = Backbone.View.extend({
    el: ".main",
    template: Handlebars.compile(eventFormTemplate),
    
    events: {
        submit: "addEvent"   
    },
    
    render: function(){
      this.$el.html(this.template);
      return this;
    },
    
    addEvent: function(event) {
      event.preventDefault();
      alert("aca procesar el form");
      
      this.collection.create({
          name: this.$('input[name=name]').val(),
          key: this.$('input[name=key]').val()
      });
      
      Backbone.history.navigate('#admin/events', true);
    }

  });

  return EventAddView;
  
});