import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    // var data = this.store.find('article');
    // console.log(data[0].title);
    //   debugger;
    // if (!params.type) {

    //   return data;
    // } else {
    //   var filtered_data = [];
    //   for ( i = 0; i < data.length; i++) {
    //     if (data[i].tags.indexOf(params.type) >= 0) {
    //       filtered_data.push(data[i]);
    //     }
    //   }
    //   return filtered_data;
    // }
  },
  model: function(params) {
    // console.log(params);
    // var data = [
    //   {
    //     id: 1,
    //     title: '5 Vegetarian Super Bow Recipes You Need to Try',
    //     date: '01-30-2015',
    //     imgStyle: 'background-image:url(images/article1.jpg)',
    //     summary: 'Resisting the salty, fried and ooey-gooey comfort food that takes over on Super Bowl Sunday is tough, but doing so when there are zero alternatives in sight makes it nearly impossible. So whether you want to avoid it entirely, or simply balance out some of the greasy treats you\'ll be snacking on all day, we rounded up nine vegetarian, nutritionist-approved Super Bowl recipes that are sure to make a tasty touchdown. Cue the end zone victory dance, please.',
    //     tags: ['workout', 'video']
    //   },
    //   {
    //     id: 2,
    //     title: '5 Reasons Morning People Are Awesome',
    //     date: '01-29-2015',
    //     imgStyle: 'background-image:url(images/article2.jpg)',
    //     summary: 'A UK study found that people who get out of bed by 6:58 a.m. are happier, thinner, and less likely to suffer from depression than those who wake up later. Not even close to the 7:00 a.m. mark? Here are five more reasons to convert your night owl tendencies.'
    //   },
    //   {
    //     id: 3,
    //     title: 'Get Amazing Abs In 16 Minutes',
    //     date: '01-29-2015',
    //     imgStyle: 'background-image:url(images/article3.jpg)',
    //     summary: 'Give us 16 crunch-free minutes. We\'ll give you a sexy belly you\'ll dare to bare all summer long.'
    //   },
    //   {
    //     id: 4,
    //     title: 'The Best Songs Designed to Make You Work Out Harder',
    //     date: '01-27-2015',
    //     imgStyle: 'background-image:url(images/article4.jpg)',
    //     summary:'Sometimes mustering up the motivation to hit the gym hard all comes down to having the perfect playlist. Lucky for us, Spotify teamed up with Insanity creator Shaun T (have you tried his Insanity Max:30 yet?) and music and exercise expert Dr. Costas Karageorghis to create the ultimate in workout-boosting playlists. Shaun T identified the top workouts of 2015, while Dr. Costas found songs with the ideal lyrics, rythym, melody, and beats per minute to complement each one. Simply find your fave sweat session below, download the accompanying playlist, crank the volume, and get moving.'
    //   }
    // ];
    return this.store.find('article');
  }
});
export default IndexRoute;