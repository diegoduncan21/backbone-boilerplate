define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Handlebars = require("handlebars");
  var indexTemplate = require('text!/app/templates/admin/indexTemplate.html');
  var ListModelViews = require('modules/views/admin/ListModelView');

  module.exports = Backbone.View.extend({
    el: "body",
    template: Handlebars.compile(indexTemplate),
    render: function(){

      this.$el.html(this.template());

      var listModelViews = new ListModelViews();
      listModelViews.render();
    }

  });
});

