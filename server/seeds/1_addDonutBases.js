
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donut_base').del()
    .then(function () {
      // Inserts seed entries
      return knex('donut_base').insert([
        {name: 'cake'},
        {name: 'yeast'},
        {name: 'old fashion'},
      ]);
    });
};