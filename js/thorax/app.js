

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



var layout = new Thorax.LayoutView();
layout.appendTo('body');

var view = new Thorax.View({
  events: {
    ready: function(){console.log('View is ready');},
    destroyed: function(){console.log('View is destroyed');},
    rendered: function(){console.log('View is rendered');}
  },
  model: new Thorax.Model({
    bookname: '',
    author: ''
  }),
  template: Handlebars.compile("{{bookname}} by {{author}}")
});
layout.setView(view);


var profileModle = new com.apress.model.thorax.Profile({id: 'sufrue'});
profileModle.fetch({success: function(){
  var profileView = new com.apress.view.ThoraxProfileView({
    model: profileModle
  });
  profileView.append('#profile');
}});

var timeline = new com.apress.collectin.thorax.Timeline();

timeline.fetch({reset:tru, success: function(){
  var timelineView = new com.apress.view.ThoraxTimelineView({
    collection: timeline
  });
  timelineView.appendTo('#timeline-section');
}});


