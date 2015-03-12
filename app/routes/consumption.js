import Ember from 'ember';

var ConsumptionRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('consumption');
  },

  activate: function() {
    this._super();
    window.scrollTo(0,0);
    $('.nav').slideUp('fast');
  }
});

export default ConsumptionRoute;
