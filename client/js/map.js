import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/map.html';

Template.map.onRendered(function() {
	GoogleMaps.load();
});

var marker, mainMap, info;

Template.map.onCreated(function() {
	GoogleMaps.ready('myMap', mapReady)
});

function mapReady(map) {
	info = new google.maps.InfoWindow();
	mainMap = map.instance;
	marker = new google.maps.Marker({
		position: map.options.center,
		map: map.instance
	});
}

Template.map.helpers({
	options: function() {
		var latLng = {lat: 21.30888424, lng: -157.8784979};
		if (GoogleMaps.loaded()) {
			return {
				streetViewControl: false,
				mapTypeControl: false,
				zoom: 10,
				center: latLng
			};
		}
	}
});
