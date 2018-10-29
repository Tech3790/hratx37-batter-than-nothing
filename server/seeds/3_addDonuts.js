
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('donuts').insert([
        { name: 'Doughrothy', description: 'This is an example description of this donut ', price: '1.75', image: 'http://pngimg.com/uploads/donut/donut_PNG81.png'},
        { name: 'Donut Delight', description: 'This is an example description of this donut ',price: '1.25', image: 'http://www.kristineplanche.com/doh-plugin/images/donut-blue.png'},
        { name: 'Maples', description: 'This is an example description of this donut ', price: '1.50', image: 'http://www.kristineplanche.com/doh-plugin/images/donut-orange.png'}
      ]);
    });
};
