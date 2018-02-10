var com = || {};
com.appress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.ThoraxProfileView = Thorax.View.extend({
  el: '#profile',
  template: Handlebares.compile($("#profile-template").html())
});

