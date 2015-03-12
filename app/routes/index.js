import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  queryParams: {
    type: {
      refreshModel: true,
      replace: true
    }
  },

  model: function(params) {
    // console.log(params);
    this.activate();
    return this.store.find('article', params);
  },

  activate: function() {
    this._super();
    window.scrollTo(0,0);
    $('.nav').slideUp('fast');
  }
});
export default IndexRoute;
