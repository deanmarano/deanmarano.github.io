import Ember from 'ember';
import Month from '../models/month';
/* global moment */

export default Ember.Component.extend({
  birthdate: Ember.computed('birthday', function() {
    return moment(this.get('birthday'));
  }),
  deathdate: Ember.computed('birthday', 'lifeExpectancy', function() {
    return moment(this.get('birthday')).add(this.get('lifeExpectancy'), 'years');
  }),
  percentComplete: Ember.computed('lifeExpectancy', 'age', function() {
    return this.get('age') / this.get('lifeExpectancy') * 100;
  }),
  percentRemaining: Ember.computed('percentComplete', function() {
    return 100 - this.get('percentComplete');
  }),
  yearsComplete: Ember.computed('birthday', function() {
    return moment().diff(this.get('birthdate'), 'years');
  }),
  yearsRemaining: Ember.computed('deathdate', function() {
    return this.get('deathdate').diff(moment(), 'years');
  }),
  monthsComplete: Ember.computed('birthday', function() {
    return moment().diff(this.get('birthdate'), 'months');
  }),
  monthsRemaining: Ember.computed('birthday', function() {
    return this.get('deathdate').diff(moment(), 'months');
  }),
  daysComplete: Ember.computed('birthday', function() {
    return moment().diff(this.get('birthdate'), 'days');
  }),
  daysRemaining: Ember.computed('birthday', function() {
    return this.get('deathdate').diff(moment(), 'days');
  }),
  age: Ember.computed('birthday', function() {
    return moment().diff(this.get('birthday'), 'years');
  }),
  maxYears: 90,
  lifeExpectancy: 76,
  name: 'Dean',
  birthday: '1987-08-13',
  years: Ember.computed('events', function() {
    var events = this.get('events');
    var firstYear = moment(events[0].date).year();
    var years = [];
    for(let i = 0; i < this.get('maxYears'); i++) {
      let l = Ember.Object.create({
        birthdate: this.get("birthdate"),
        deathdate: this.get("deathdate")
      });
      let year = firstYear + i;
      let label;
      if(year == firstYear || year % 10 == 0 || year == moment().year()) {
        label = year;
      }
      years[i] = {year: firstYear + i, months: [], label: label};
      for(let month = 1; month < 12; month++) {
        years[i].months.push(this.createMonth(month, year, firstYear, l));
      }
    }
    return years;
  }),
  createMonth(month, year, firstYear, life) {
      let events = [];
      if((month - 1) == this.get('birthdate').month()) {
        events.push({type: 'life', text: `${name}'s ${year - firstYear} birthday`});
      }
      return Month.create({month: month, year: year, life: life, events: events});
  }
});
