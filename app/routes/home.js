import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      posts: [{
        filename: '/posts/gender-in-web-forms.md',
        url: 'thinking-about-gender-in-web-forms',
        title: 'Gender in Web Forms',
        date: ' 2016-09-29'
      },
      {
        externalHost: 'Medium',
        url: 'https://medium.com/espark-engineering-blog/testing-your-jekyll-site-the-ruby-way-ccfa386a8318',
        title: 'Testing Jekyll, The Ruby Way',
        date: ' 2016-07-07'
      }]
    };
  }
});
