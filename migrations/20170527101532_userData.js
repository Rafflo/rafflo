
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userData', function (table) {
    table.increments();
    table.string('userName');
    table.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userData')
};
