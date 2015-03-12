import DS from "ember-data";

var Consumption = DS.Model.extend({
  date: DS.attr('string'),
  eat: DS.attr('number'),
  workout: DS.attr('number')
});

export default Consumption;