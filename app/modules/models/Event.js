define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  module.exports = Backbone.Model.extend({
    defaults: {
      id: "Not specified",
      namespace: "events",
      owner: "Not specified",
      name: "Not specified",
      description: "Not specified",
      place: "Not specified",
      urlImage: "Not specified",
      created_at: new Date(),
      updated_at: "Not specified",
      start_at: "Not specified",
      end_at: "Not specified",
    },
  });
});


