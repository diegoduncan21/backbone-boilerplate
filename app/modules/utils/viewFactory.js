define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'modules/views/admin/events/list',
  'modules/views/admin/events/edit',
  'modules/views/admin/events/add',
  'modules/views/admin/news/list',
  'modules/views/admin/news/edit',
  'modules/views/admin/news/add',
], function($, 
            _, 
            Backbone, 
            Handlebars,  
            EventsListView,
            EventsEditView,
            EventsAddView,
            NewsListView,
            NewsEditView,
            NewsAddView) {
  function viewFactory(options){
      var viewsDict = {
        events: {
          list: EventsListView,
          edit: EventsEditView,
          add: EventsAddView
        },
        news : {
          list: NewsListView,
          edit: NewsEditView,
          add: NewsAddView
        }
      }
      return viewsDict[options.model][options.action];
  }

  return viewFactory;
  
});