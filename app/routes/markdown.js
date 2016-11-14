import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'markdown',
  model() {
    return $.get(this.get('fileName'));
  },
 setupController(controller, model) {
   controller.set('title', this.get('title'));
   controller.set('content', model);
 }
});
