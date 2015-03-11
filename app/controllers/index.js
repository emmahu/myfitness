import Ember from 'ember';

var IndexController = Ember.ArrayController.extend({
  queryParams: ['type'],
  type: null,

  init: function() {
    this._super();

    // Run this in the next run loop to make sure that everything has been
    // propagated to the controller.
    Ember.run.once(this, 'syncFiltersOnInit');
  }

});


export default IndexController;
