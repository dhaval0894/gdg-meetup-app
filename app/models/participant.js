import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  gender: DS.attr('string'),
  contact: DS.attr('string'),
  suggestion: DS.attr('string'),
  event: DS.belongsTo('event')
});
