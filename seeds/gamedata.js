exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        {
          id: 151,
          location: "Denver Park Complex",
          city: "Denver",
          // day selction
          day: "Monday",
          // time selection
          time: "Night",
          // level
          level: "Open",
          // field type
          surface: "Turf",
          // goals
          goals: "Netless",
          // info
          info_parking: true,
          info_restrooms: false,
          info_water: true,
          info_lights: false,
          // stats
          stats_games_completed: 45,
          stats_total_players: 119
        },
        {
          id: 152,
          location: "Washington Park",
          city: "Washington Park",
          day: "Wednesday",
          time: "Morning",
          level: "Normal",
          surface: "Concrete",
          goals: "None",
          info_parking: false,
          info_restrooms: true,
          info_water: true,
          info_lights: false,
          stats_games_completed: 13,
          stats_total_players: 88
        },
        {
          id: 153,
          location: "Boulder High",
          city: "Boulder",
          day: "Sunday",
          time: "Night",
          level: "Competitive",
          surface: "Concrete",
          goals: "None",
          info_parking: true,
          info_restrooms: true,
          info_water: true,
          info_lights: true,
          stats_games_completed: 22,
          stats_total_players: 45
        },
        {
          id: 154,
          location: "Golden Sports Park",
          city: "Golden",
          day: "Friday",
          time: "Day",
          level: "Open",
          surface: "Dirt",
          goals: "Full",
          info_parking: false,
          info_restrooms: false,
          info_water: true,
          info_lights: false,
          stats_games_completed: 9,
          stats_total_players: 29
        }
      ]);
    })
    .then(() => {
      // starts the next index at 1000
      return knex.raw("ALTER SEQUENCE games_id_seq RESTART WITH 1000;");
    });
};



