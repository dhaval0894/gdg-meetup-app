import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('participant');
	},

  actions: {
		register(newParticipant) {
      newParticipant.save().then(() => this.transitionTo('index'));
    }
	}
});
