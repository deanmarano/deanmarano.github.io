import Ember from 'ember';
import Month from '../models/month';
/* global moment */

export default Ember.Component.extend({
  actions: {
    expandMonth(year, month) {
      this.get('life.years').forEach(year => Ember.set(year, 'currentMonth', null));
      Ember.set(year, 'currentMonth', month);
    }
  }
});
