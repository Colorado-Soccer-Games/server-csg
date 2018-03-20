exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", table => {
    // game id
    table.increments("id").primary();
    // game info
    table.text("location");
    table.text("city");
    table.text("day");
    // 7 // monday,tuesday, wednesday, thursday, friday, saturday, sunday
    table.text("time");
    // 3 //  morning, day, night
    table.text("level");
    // 3 // open, normal, competitive
    table.text("surface");
    // 3 // goals, netless, none
    table.string("goals");
    // 4 // grass, turf, dirt, hard-court
    // field info checkboxes
    table.boolean("info_parking");
    table.boolean("info_lights");
    table.boolean("info_water");
    table.boolean("info_restrooms");
    // game stats
    table.integer("stats_games_completed");
    table.integer("stats_total_players");
    // twilio
    table.number("phone_number");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};
