import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('index', {path: '/'});
  // this.resource('index',  {path: '/articles/:type'});
  this.resource('article', { path: '/article/:article_id'} );
});

export default Router;
