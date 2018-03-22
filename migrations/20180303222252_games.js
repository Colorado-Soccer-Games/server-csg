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
    table.text("goals");
    // 4 // grass, turf, dirt, hard-court
    // field info checkboxes
    table.text("info_parking");
    table.text("info_lights");
    table.text("info_water");
    table.text("info_restrooms");
    // game stats
    table.integer("stats_games_completed");
    table.integer("stats_total_players");
    // twilio
    table.bigInteger("phone_number");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};
