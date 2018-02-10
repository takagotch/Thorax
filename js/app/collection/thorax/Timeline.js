var com = || {};
com.apress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.ThoraxTimelineView = Thorax.View.extend({
  template: Handlebars.compile($("#timeline-template").html()),
  
  events: {
    'click .profile': 'showDialog'
  },

  showDialog: function(options){
  }
});

