import Ember from 'ember';
import Life from 'dean-is/models/life';

export default Ember.Route.extend({
  model() {
    return new Life({
      name: 'Dean',
      birthdate: moment('1987-08-13'),
      events: [
        { date: moment('1990-10-05'), type: 'family', text: 'Kevin was born.' },
        { date: moment('1993-11-03'), type: 'family', text: 'Moved to 3N131 Sycamore, West Chicago, IL.' },
        { date: moment('1994-03-03'), type: 'family', text: '3N131 Sycamore house fire.' },
        { date: moment('1994-05-18'), type: 'family', text: 'Alex was born.' },
        { date: moment('2005-10-18'), type: 'family', text: 'Chewy was born.'},
        { date: moment('2005-12-02'), type: 'family', text: 'Mom and Dad separate.'},
        { date: moment('2014-11-17'), type: 'family', text: 'Dad and Debi get married.'},

        { date: moment('2001-06-03'), type: 'education', text: 'Graudated from Benjamin Middle School' },
        { date: moment('2001-08-20'), type: 'education', text: 'Started St. Francis High School.' },
        { date: moment('2005-05-20'), type: 'education', text: 'Graudated from St. Francis High School.' },
        { date: moment('2005-08-18'), type: 'education', text: 'Started Hope College bachelors degree in biology and chemistry.' },
        { date: moment('2009-05-24'), type: 'education', text: 'Graduated Hope College bachelors degree in computer science.' },
        { date: moment('2011-09-05'), type: 'education', text: 'Started DePaul University masters degree in computer science with AI emphasis.' },

        { date: moment('2011-08-01'), type: 'life', text: 'Moved to 1281 W. Westgate Terrace, Chicago, IL.' },
        { date: moment('2011-10-09'), type: 'life', text: 'Completed 2011 Chicago Marathon.' },
        { date: moment('2012-07-15'), type: 'life', text: 'Completed 2013 Racine Ironman 70.3.' },
        { date: moment('2012-10-07'), type: 'life', text: 'Completed 2012 Chicago Marathon.' },
        { date: moment('2013-10-13'), type: 'life', text: 'Completed 2013 Chicago Marathon.' },

        { date: moment('2008-05-05'), type: 'work', text: 'Started job at Hope Computer Information and Technology department.' },
        { date: moment('2008-05-15'), type: 'work', text: 'Started internship at Allstate as Systems Analyst.' },
        { date: moment('2008-08-20'), type: 'work', text: 'Finished internship at Allstate.' },
        { date: moment('2009-05-05'), type: 'work', text: 'Left job at Hope Computer Information and Technology department.' },
        { date: moment('2009-07-29'), type: 'work', text: 'Started at Computer System Innovations as Systems Analyst.' },
        { date: moment('2011-12-20'), type: 'work', text: 'Left job at Computer System Innovations.' },
        { date: moment('2012-01-16'), type: 'work', text: 'Started at Groupon as Software Engineer I.' },
        { date: moment('2015-11-16'), type: 'work', text: 'Left job at Groupon as Software Engineer III.' },
        { date: moment('2015-12-16'), type: 'work', text: 'Started job at eSpark Learning as Senior Software Engineer.' },
        { date: moment('2016-08-19'), type: 'work', text: 'Left job at eSpark Learning as Senior Software Engineer.' },

        { date: moment('1994-11-04'), type: 'world', text: 'Bill Clinton elected president of US.' },
        { date: moment('2000-11-04'), type: 'world', text: 'George W. Bush elected president of US.' },
        { date: moment('2001-09-11'), type: 'world', text: '9/11 Terror Attacks.' },
        { date: moment('2008-11-04'), type: 'world', text: 'Barack Obama elected president of US.' },
        { date: moment('2016-11-03'), type: 'world', text: 'Cubs win World Series.' },
        { date: moment('2008-11-08'), type: 'world', text: 'Donald Trump elected president of US.' }
      ]
    });
  }
});
