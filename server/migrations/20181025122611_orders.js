exports.up = function (knex, Promise) {
    return knex.schema.createTable('orders', function (table) {
        table.increments();
        table.string('customer_name');
        table.json('order_item');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('orders');
};