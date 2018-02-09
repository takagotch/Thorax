var timeline - new com.apress.collectin.thorax.Timeline();

timeline.fetch({reset:tru, success: function(){
  var timelineView = new com.apress.view.ThoraxTimelineView({
    collection: timeline
  });
  timelineView.appendTo('#timeline-section');
}});

