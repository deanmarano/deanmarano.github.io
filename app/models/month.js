import DS from 'ember-data';
import Ember from 'ember';

const { attr, belongsTo } = DS;

export default Ember.Object.extend({
  //month: attr('number'),
  //year: attr('number'),
  date: Ember.computed('month', 'year', function() {
    var month = this.get('month');
    var paddedMonth = month < 10 ? '0' + month : month;
    return moment(`${this.get('year')}-${paddedMonth}-01`);
  }),
  //life: belongsTo('life'),
  number: Ember.computed('month', function() {
    this.get('month') - 1;
  }),
  hasEvent: Ember.computed.gt('events.length', 0),
  beforeLife: Ember.computed('date', 'life.birthdate', function() {
    return this.get('date').diff(this.get('life.birthdate'), 'months') < 0;
  }),
  past: Ember.computed('date', function() {
    return this.get("date").diff(moment()) < 0;
  }),
  afterDeath: Ember.computed('date', 'life.deathdate', function() {
    return this.get('date').diff(this.get('life.deathdate'), 'months') >= 0;
  }),
  classes: Ember.computed('hasEvent', 'before-life', 'past', 'afterDeath', function() {
    return ['hasEvent', 'beforeLife', 'past', 'afterDeath'].
      map(c => this.get(c) ? c.dasherize() : null).
      compact().join(' ');
  })
});
