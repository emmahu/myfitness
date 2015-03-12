import DS from "ember-data";

var Article = DS.Model.extend({
  // id: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('string'),
  imgStyle: DS.attr('string'),
  coverImage: DS.attr('string'),
  // summary: DS.attr('string'),
  tags: DS.attr(),
  text: DS.attr(),
  recommendations: DS.attr()
});

export default Article;
