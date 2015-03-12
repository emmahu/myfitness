import Ember from 'ember';

var ArticleRoute = Ember.Route.extend({
  // renderTemplate: function() {
  //   this.render('page');
  // },
  // setupController: function(controller, model) {
  //   controller.set('model', model);

  // },
  model: function(params) {
    return this.store.find('article', params.article_id);

  }
});
export default ArticleRoute;