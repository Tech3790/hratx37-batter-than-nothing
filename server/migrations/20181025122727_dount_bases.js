exports.up = function (knex, Promise) {
    return knex.schema.createTable('donut_base', function (table) {
        table.increments();
        table.string('name');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('donut_bases');
};