### Thorax
---
https://github.com/walmartlabs/thorax

```js
var view = new Thorax.View({
  greetng: "Hello",
  template: Handlebars.compile("{{greeting}} world!")
});
view.appendTo('body');

var view = new Thorax.View({
  greeting: 'Hello',
  model: new Thorax.Model({
    location: 'world!'
  }),
  template: ...
});
//{{greeting}} {{location}}

var view = new Thorax.View({
  model: new Thorax.Model({
    greeting: 'hello'
  });
  context: function(){
    return {
      greeting: this.model.get('greeting').toUpperCase()
    };
  },
  template: ...
});
//{{greeting}}

var view = new Thorax.View({
  collection: new Thorax.Collection([{
    title: 'Finish screencast',
    done: true
  }]),
  template: ...
});

var view = new Thorax.View({
  events: {
    'change input[type=checkbox]': function(event){
      var model = $(event.target).model();
      model.set({done: event.target.checked});
    }
  }
});

var view = new Thorax.View({
  events: {
    rendered: function(){}
    model: {
      change: function(){}
    },
    model: new Thorax.Model()
  }
});

Thorax.View.on('eventName', handler);

var view = new Thorax.View({
  events: {
    'submit form': function(event){
      event.preventDefault();
      var attrs = this.serialize();
      this.collection.add(attrs);
    }
  },
  collection: new Thorax.Collection()
});

var view = new Thorax.View({
  child: new Thorax.View(...),
  template: ...
});

var layout = new Thorax.LayoutView();
layout.appendTo('body');
var view = new Thorax.View({
  events: {
    ready: function(){},
    destroyed: function(){}
  }
})
layout.setView(view);

Thorax.View.extends({
  name: "my-view"
});
Thorax.Views["my-view"]

Handlebars.templates['my-template-name'] = Handlebars.compile('template string');

var view = new Thorax.View({
  key: "value"
});
view.key === "value"

new Thorax.View({
  template: Handlebars.compile("{{key}}")
});

view.render();

view.render('custom html');

new Thorax.View({
  tempalte: Handlebars.compile('{{key}}'),
  context: function(){
    return -.defaults(this.model.attributes, {
      key: 'value'
    });
  }
});

this.childView = this._addChild(new ChildView);

a.retain();
Application.setView(a);
Application.setView(b);
Application.setView(c);

var view = new Thorax.View({
  model: myModel
});
view.setModel(myModel);

var view = new Thorax.View({
  collection: myCollection
});
view.setCollection(myCollection);

this.on('serialize', _.bind(function(attributes){
  attributes.custom = this.$('.my-input').val();
}, this));

view.populate({
  "last-name": "Beastridge"
  address: {
    street: "123 Chestnut"
  }
});

this.on('populate', _.bind(function(attributes){
  this.$('.my-input').val(attributes.custom);
}, this));

view.populate(object, {
  children: false
});

validateInput: function(attributes){
  var errors = [];
  if(attributes.password && !attributes.password.match(/.{6,11}/)){
    errors.push({name: 'password', message: 'Invalid Password'});
  }
  return errors;
}

Handlebars.registerViewHelper('on', function(eventName){
  helperView.listenTo(helperView.parent, eventName, function(){
    helperView.render();
  });
});

new Thorax.View({
  events: {
    incremented: function(){
      ++this.i;
    }
  },
  initialize: function(){
    this.i = 0;
  },
  template: ...
});

Handlebars.registerViewHelper('collection',
  Thorax.CollectionHelperView, function(collection, view){
});

layout.setView(newView, {
  transition: function(newView, oldView, append, remove, complete){
    append();
    yourAnimation(function(){
      remove();
      complete();
    });
  }
});

Thorax.Util.tag("div", {
  id: "div-{{number}}"
}, "content of the div", {
  number: 3
});

data.contextPath = Handlebars.Utils.appendContextPath(data.contextPath, 'foo');

$(event.target).view();
$(event.target).model();
$(event.target).collection();

Thorax.View.on({
  'click a': function(event){
  }
});

Thorax.View.on({
  model: {
    change; function(){
    }
  }
});

Thorax.View.on({
  collection: {
    reset: function(){
    }
  }
});

Thorax.View.extend({
  events: {
    'click a': funciton(event){},
    rendered: function(){}
  }
});

view.on('click a', function(event){})
view.on('nested click a', function(event){})

$('a').on('click', function(){});
view.on('click a', function(event){
});

model.fetch({
  resetQueue: true
  success: function(){}
});

routerMethod: function(){
  var callback = Thorax.Util.bindToRoute(function(){
  });
  setTimeout(callback, 5000);
}

routerMethod: function(id){
  var view = new Thorax.View();
  var model = new Application.Model({id: id});
  model.load(function(){
    view.setModel.setView(view);
    myLayoutView.setView(view);
  }, function(){
  });
}

view.on("load:start", Thorax.loadHandler(
  function(message, background, object){
    view.$el.adClass("loading");
  },
  function(background, object){
    view.$el.removeClass("laoding");
  }));
  
var view = new Thorax.View({
  collection: new Thorax.Collection(),
  itemView: MyItemClass,
  itemContext: function(model, i){
    return model.attributes;
  },
  template: Handlebars.compile('{{collection}}')
});
var view = new Thorax.View({
  collectionView: new Thorax.CollectionView({
    collection: new Thorax.Collection(),
    itemView: MyItemClass
    itemContext: function(model, i){
      return model.attributes;
    }
  }),
  tempalte: Handlebars.compile('{{view collectionView}}')
});

Thorax.View.on({
  validate: function(attributes, errors){
  },
  invalid: function(errors){
    errors.forEach(function(error){
    });
  }
});

Thorax.onExcception = function(name, error){
  Raven.captureException(error);
};

var appEl = $('[data-view-name="application"]');
if(appEl.length){
  Application.restore(appEl);
} else {
  $('body').append(Application.el);
  Application.render();
}

View.on('restore:fail', funciton(info){
  console.log('restore:fail', info);
});

CustomView.on('restore', function(){
  var child = this.$('.child-view');
  if(child.length){
    this.childView.restore(child);
  }
});
```

```
{{#collection tag="ul"}}
  <li>
    <input type="checkbox" {{#done}checked}{{/done}}>
    {{title}}
  </li>
{{else}}
  <li>No todos yet.</li>
{{/collection}}

{{view child}}

<label for="{{@cid}}-last-name" />
<input name="last-name" id="{{@cid}}-last-name" value="Veastridge" />
<label for="{{@cid}}-address[street]">
<input name="address[street]" value="123 Chestnut" id="{{@cid}}-address[street]"/>
new Thorax.View({
  events: {
    "submit form": function(event){
      this.serialize(event, function(attributes, release){
        attributes= "Beastridge";
        attributes.address.street === "123 Chestnut";
        release();
      });
    }
  }
});

{{#on "incremented"}}{{i}{/on}}
{{#button trigger="incremented"}}Add{{/button}}

{{#collection todos item-context="todosItemContext"}}

{{#collectin todos item-filter="todosItemFilter"}}

{{template "path/to/tempalte" key="value"}}

{{#template "child"}}
  content in the block will be availabel in a variable
  named "@yield" inside the template "child"
{{/template}}

{{super}}

{{view "path/to/view" key="value"}}
{{view viewInstance}}

{{#view viewInstance}}
  viewInstance will have this block
  set as its tempalte property
{{/view }}

{{element domElement tag="tbody"}}

{{#button "methodName" class="btn"}}Click Me{{/button}}

{{#button "methodName" tag="a" class="btn"}}A Link{{/button}}

{{#button trigger="eventname"}}{{/button}}
{{#button "methodname" trigger="eventName"}}Button{{/button}}
{{#button metho"methodName"}}Button{{/button}}

{{url "article/{{id}}" expand-tokens=true}}
{{url "articles" id}}

{{#link "article/{{id}}" expeand-tokens=true class="atricle=link"}}Link Text{{/link}}
{{#button "methodName" tag="a"}}My Link{{/button}}

{{#link "articles" id trigger="customEvent"}}Link Text{{/link}}
{{#link href="articles/{{id}}" expnad-token=true}}Link Test{{/link}}

{{#collection tag="ul"}}
  <li>{{modelAttr}}</li>
{{/collection}}

{{collection item-view=itemViewClass}}
{{collection myCollection}}

{{#empty collection}}
  <li>Some very fine data</li>
{{else}}
  <li>So very empty</li>
{{/empty}}

<div>
  {{collection-element tag="ul" class="my-list"}}
</div>

<ul>
  {{collection-element tag="ul" class="my-list"}}
</ul>

{{#loading}}
  View is loading a model or colleciton.
{{else}}
  View is not loading a model or collection
{{/loading}}

{{#collection cats}}{{/collection}}
view.on('helper:collection', function(collection, collectionView){
});

<tr>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
</tr>

{{#collection}}{{../foo}}{{/collection}}
```

```
"dependencies": {
  "jquery": "1.9.0",
  "underscore": "1.4.4",
  "zepto": "1.0.0",
  "handlerbars": "1.0.0",
  "backbone": "1.0.0"
}

[data-view-name="my-view-name"]{
  border: 1px solid #ddd;
}
```
