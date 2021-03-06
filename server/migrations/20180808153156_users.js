exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(register) {
      register.increments();
  
      register.string("username").notNullable().unique();
      register.string("department").notNullable();
  
      register.string("password").notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };