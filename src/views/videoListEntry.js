var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'clickHandler'
  },

  clickHandler: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },


  template: templateURL('src/templates/videoListEntry.html')

});
