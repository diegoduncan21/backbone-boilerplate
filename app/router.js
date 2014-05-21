define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var DashboardView = require("modules/views/admin/Dashboard");
  var viewFactory = require('modules/utils/viewFactory');

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "admin": "adminIndex",
      "admin/:model": "adminModelList",
      "admin/:model/add": "adminModelAdd",
      "admin/:model/:id/edit": "adminModelEdit",

      '*actions': 'defaultAction'
    },

    adminIndex: function() {
      var dashboardView = new DashboardView();
      dashboardView.render();
    },
    
    adminModelList: function(model) {
      var ClassView = viewFactory({model: model, action: "list"});
      var view = new ClassView();
      view.render();
    },
    
    adminModelAdd: function(model) {
      var ClassView = viewFactory({model: model, action: "add"});
      var view = new ClassView();
      view.render();
    },
    
    adminModelEdit: function(model, id) {
      var ClassView = viewFactory({model: model, action: "edit"});
      var view = new ClassView({id: id});
    },
    
    defaultAction: function() {
      alert("No se lo que estas queriendo hacer!");
    },
  });
});
