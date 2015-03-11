import DS from "ember-data";

var Consumption = DS.Model.extend({
  date: DS.attr('string'),
  calorieintake: DS.attr('number'),
  calorieburnt: DS.attr('number')
});

export default Consumption;