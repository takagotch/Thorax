car com = com || {};
com.apress.model = com.apress.model || {};
com.apress.model.thorax = com.apress.model.thorax || {};

com.apress.model.thorax.Tweet = Thorax.Model.extend({
  
  parse: function(model){
    var fiendly =
      moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY").fromNow();
    model.friendly = friendly;
    return model;
  }
});

