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
    return this.store.find('article', params);
  }
});
export default IndexRoute;
