var subview = new Thorax.View({
  model: new Thorax.Model({
    description: '...',
    author: '...'
  }),
  label: 'Title',
  context: function(){
    return{
      bookname: this.model.get('bookname').toUpperCase()
    }
  },
  subview: subview,
//template: Handlebars.compile("{{description}}"),
  template: Handlebars.compile(
    "{{;abe;}} : {{bookname}} by {{author}} <br> {{view subview}}"),
});
view.appendTo('body');


var timeline - new com.apress.collectin.thorax.Timeline();

timeline.fetch({reset:tru, success: function(){
  var timelineView = new com.apress.view.ThoraxTimelineView({
    collection: timeline
  });
  timelineView.appendTo('#timeline-section');
}});


