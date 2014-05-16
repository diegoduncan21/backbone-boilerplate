define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var DashboardView = require("modules/views/admin/Dashboard");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "admin": "adminIndex",

      '*actions': 'defaultAction'
    },

    adminIndex: function() {
      var dashboardView = new DashboardView();
      dashboardView.render();
    },
    defaultAction: function() {
      alert("No se lo que estas queriendo hacer!");
    },
  });
});
