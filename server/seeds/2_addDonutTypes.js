
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donut_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('donut_type').insert([
        {name: 'glazed'},
        {name: 'maple'},
        {name: 'blueberry'},
        {name: 'chocolate'}
      ]);
    });
};