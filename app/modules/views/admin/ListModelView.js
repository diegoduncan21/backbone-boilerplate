define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Handlebars = require("handlebars");
  var listModelTemplate = require('text!/app/templates/admin/listModelTemplate.html');
  var ModelCollection = require('modules/collections/Model');
  var viewFactory = require('modules/utils/viewFactory');

  module.exports = Backbone.View.extend({
    el: ".nav-sidebar",
    events: {
      "click .tabs" : "ModelSelect"
    },
    template: Handlebars.compile(listModelTemplate),
    render: function(){

      var modelCollection = new ModelCollection();
      this.$el.html(this.template({models: modelCollection.toJSON()}));
      return this;

    },
    ModelSelect : function(event){
      event.stopImmediatePropagation();
      var model = $(event.currentTarget).attr("data").toLowerCase();
      var view = viewFactory(model);
      view.render();
    }

  });
});

