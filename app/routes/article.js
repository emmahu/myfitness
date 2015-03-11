import Ember from 'ember';

var ArticleRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('page');
  },
  // setupController: function(controller, model) {
  //   controller.set('model', model);

  // },
  model: function(params) {
    // return {
    //   title: '5 Vegetarian Super Bow Recipes You Need to Try',
    //   text: '<p>Resisting the salty, fried and ooey-gooey comfort food that takes over on Super Bowl Sunday is tough, but doing so when there are zero alternatives in sight makes it nearly impossible.<br><br><iframe width="350" height="315" src="https://www.youtube.com/embed/yis_abh3noI" frameborder="0" allowfullscreen></iframe><br><br>So whether you want to avoid it entirely, or simply balance out some of the greasy treats you\'ll be snacking on all day, we rounded up five vegetarian, nutritionist-approved Super Bowl recipes that are sure to make a tasty touchdown. Cue the end zone victory dance, please.</p><img src="images/article1_1.jpg"/>',
    //   recommendations: [
    //     {
    //       img: 'images/article1_recom1.jpg',
    //       title: 'Foods That Ease PMS Symptoms-Foods for PMS'
    //     },
    //     {
    //       img: 'images/article1_recom2.jpg',
    //       title: '7 Creative Cauliflower Recipes'
    //     },
    //     {
    //       img: 'images/article1_recom3.jpg',
    //       title: '9 Gluten-Free Muffins You Can Make at Home'
    //     }
    //   ]
    // };
    return this.store.find('article', params.article_id);

  }
});
export default ArticleRoute;