define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  module.exports = Backbone.Model.extend({
    defaults: {
      id: "Not specified",
      namespace: "news",
      owner: "Not specified",
      title: "Not specified",
      content: "Not specified",
      urlImage: "Not specified",
      created_at: new Date(),
      updated_at: "Not specified",
    },
  });
});
