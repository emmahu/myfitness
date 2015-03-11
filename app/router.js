import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('article', { path: '/article/:article_id'} );
  this.resource('consumption');
});

export default Router;
