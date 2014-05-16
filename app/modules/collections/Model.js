define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  module.exports = Backbone.Collection.extend({
    // model: Model,
    
    initialize: function(){
      this.add([
        {name: "events", title: "Eventos"}, 
        {name: "news", title: "Noticias"}, 
        {name: "message", title: "Mensajes"}, 
      ]);
    },

  });
});

