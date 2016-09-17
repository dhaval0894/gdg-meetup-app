import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('event', params.event_id);
	},

	actions: {
		destroyEvent(event) {
			event.destroyRecord().then(() => { this.transitionTo('index') });
		}
	}
});
