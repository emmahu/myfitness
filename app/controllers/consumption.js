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
    },
    edit: function() {
      this.set('isNotEditing', false);
    },
    create: function() {
      this.set('isNotEditing', false);
      this.store.createRecord('consumption',{
        date: new Date().toISOString().substring(0, 10),
        eat: 0,
        workout: 0
      });
    },
    delete: function(id) {
      var shouldDelete = confirm('Are you sure you want to delete this record?');
      if(shouldDelete) {
        this.store.find('consumption', id).then(function (consumption) {
          consumption.destroyRecord();
        });
      }
    }
  },
  isNotEditing: true

});


export default ConsumptionController;
