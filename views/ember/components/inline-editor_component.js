App.InlineEditorComponent = Ember.Component.extend({
  tagName: 'span',
  isEditing: false,
  singleLine: false,
  primary: false,

  init: function() {
    this._super();
    
    this.get('targetObject').on("routeChange", $.proxy(function(){
      this.set('isEditing', false)
    },this));

    if (this.get('primary')) {
      this.get('targetObject').on("openPrimary",$.proxy(function(){
        this.set('isEditing', true)
      },this));
    }
  },

  actions: {
    beginEditing: function() {
      this.set('isEditing', true);
    },
    
    endEditing: function(val) {
      this.set("val",val);
      this.set('isEditing',false);
      this.sendAction("action", val);
    } 
  },

  labelRowClass: function() {
    return this.get('singleLine') ? "col-sm-2" : "col-sm-4"
  }.property('singleLine'),

  fieldRowClass: function() {
    return this.get('singleLine')  ? "col-sm-10" : "col-sm-8"
  }.property('singleLine'),


});

App.InlineInputComponent = Ember.TextField.extend({
  action: 'endEditing',
  targetObject: Em.computed.alias('parentView'),  
  previousVal: "",
  init: function() {
    this._super();
    var value = (this.get("val"));
    this.set("value", value);
    this.set("previousVal", value);
  },
  becomeFocused: function() {
   this.$().focus();
  }.on('didInsertElement'),

  focusOut: function() {
    this.completeEditing();
  },
  insertNewline: function(e) {
    this.completeEditing();
  },
  cancel: function() {
    this.set('value',this.get('previousVal'));
    this.completeEditing();
  },
  completeEditing: function() {
    var val = this.get('value');
    this.set("previousVal", val);
    this.sendAction('action',val);
  }
});