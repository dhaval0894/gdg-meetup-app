import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('event', params.event_id);
	},

	setupController: function(controller, model) {
  	this.controllerFor('events.edit').setProperties({isEditing:true,content:model});
	},

	actions: {
		updateEvent(event) {
			event.save().then(() => this.transitionTo('events.show', event));
		}
	}
});
