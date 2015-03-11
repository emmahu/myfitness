import Ember from 'ember';

var ConsumptionRoute = Ember.Route.extend({
  model: function() {
    return this.find('consumption')
  }
});

export default ConsumptionRoute;