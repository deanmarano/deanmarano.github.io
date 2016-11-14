import Ember from 'ember';

var myAge = '29';

export default Ember.Controller.extend({
  parentsAge: Ember.computed("date", function() {
    if(this.get('date')) {
      var date = new Date(this.get('date'));
      return date.getFullYear() - 1960;
    }
  }),
  parentsNotBorn: Ember.computed.lt('parentsAge', 0),
  grandparentsNotBorn: Ember.computed.lt('grandparentsAge', 0),
  parentsAgeDiff: Ember.computed("parentsAge", function() {
    var parentsAge = this.get('parentsAge');
    if(parentsAge < myAge) {
      return `${myAge - parentsAge} younger than me.`
    } else if(parentsAge > myAge) {
      return `${parentsAge - myAge} older than me.`
    } else {
      return 'were my age.';
    }
  }),
  grandparentsAge: Ember.computed("date", function() {
    if(this.get('date')) {
      return new Date(this.get('date')).getFullYear() - 1927;
    }
  }),
  grandparentsAgeDiff: Ember.computed("grandparentsAge", function() {
    var grandparentsAge = this.get('grandparentsAge');
    if(grandparentsAge < myAge) {
      return `${myAge - grandparentsAge} younger than me.`
    } else if(grandparentsAge > myAge) {
      return `${grandparentsAge - myAge} older than me.`
    } else {
      return 'were my age.';
    }
  }),
});
