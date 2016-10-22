import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      type: 'life',
      date: '1987-08-13',
      description: 'Dean was born.'
    }]
  }
});
