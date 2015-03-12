import Ember from 'ember';

var ConsumptionController = Ember.ArrayController.extend({
  actions: {
    save: function(){
      // this.set('isNotEditing',!this.get('isNotEditing'));
      this.set('isNotEditing', true);
      // console.log('save');
      this.forEach(function(consumption) {
        console.log(consumption.get('id'));
        consumption.save();
      });
      // var consumptions = this.get('model');
      // console.log(consumptions);
      // for (var i = 0; i < consumptions.length; i++) {
      //   consumptions[i].save();
      // }
    },
    edit: function() {
      this.set('isNotEditing', false);
    }
  },
  isNotEditing: true

});


export default ConsumptionController;
