import Ember from 'ember';

var ArticleRoute = Ember.Route.extend({
  // renderTemplate: function() {
  //   this.render('page');
  // },
  // setupController: function(controller, model) {
  //   controller.set('model', model);

  // },
  model: function(params) {
    this.activate();
    return this.store.find('article', params.article_id);
  },

  activate: function() {
    this._super();
    window.scrollTo(0,0);
    $('.nav').slideUp('fast');
  }
});
export default ArticleRoute;
