'use strict';

import { Meteor } from 'meteor/meteor';
var APIs = require('../APIs.js');


Meteor.methods({
  checkWeather: function () {
      this.unblock();
      return Meteor.http.call("GET", "http://api.openweathermap.org/data/2.5/forecast?q=honolulu,us&mode=JSON&appid=" + APIs.openWeatherAPI);
  }
});

//invoke the server method
Meteor.call("checkWeather", function(error, results) {
  console.log(JSON.parse(results.content).list[0].main);
});