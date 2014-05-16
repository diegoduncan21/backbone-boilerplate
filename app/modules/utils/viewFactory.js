define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'modules/views/admin/events/list',
  'modules/views/admin/news/list',
], function($, 
            _, 
            Backbone, 
            Handlebars,  
            EventsListView,
            NewsListView) {
  function viewFactory(model){
    
      var view;
      switch (model) {
        case "events":
          view = new EventsListView();
          break;
        case "news":
          view = new NewsListView();
          break;
        // case "messages":
        //   var modelCollection = new ModelCollection();
        //   break;
        default:
          console.log("no se encontro la vista");
          break;
      }
      return view;
  }

  return viewFactory;
  
});