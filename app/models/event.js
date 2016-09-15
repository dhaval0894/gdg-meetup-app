import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  technology: DS.attr('string'),
  agenda: DS.attr('text'),
  venue: DS.attr('string'),
  eventDate: DS.attr('date')
});
