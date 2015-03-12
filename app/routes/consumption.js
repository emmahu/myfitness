import Ember from 'ember';

var ConsumptionRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('consumption');
  }
});

export default ConsumptionRoute;