
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('toppings').insert([
        {name: "Sprinkles", price: 0.25},
        {name: "Red Hots", price: 0.35},
        {name: "Nuts", price: 0.30},
        {name: "Cookies", price: 0.20},
        {name: "Rose Petals", price: 0.40},
        ]);
    });
};