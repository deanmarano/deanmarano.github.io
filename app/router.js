import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: ''});
  this.route('about', {path: 'pretty-cool'});
  this.route('resume', {path: 'working'});

  // Projects
  this.route('life-calendar', {path: 'living-life'});
  this.route('eye-color', {path: 'looking-at-eyes'});

  // Posts
  this.route('post', {path: ':url'});
});

export default Router;
