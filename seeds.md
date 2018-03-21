exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        {
          id: 101,
          location: "Belmar Park",
          city: "Lakewood",
          day: "Friday",
          time: "Night",
          game_level: "Competitive",
          field_condition: "Goals",
          field_details: "Parking",
          stats_games_completed: 10,
          stats_total_players: 60
        },
        {
          id: 102,
          location: "Arvada Field",
          city: "Arvada",
          day: " Wednesday",
          time: "Night",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "Lights",
          stats_games_completed: 68,
          stats_total_players: 200
        },
        {
          id: 103,
          location: "Aurora Park",
          city: "Aurora",
          day: " Tuesday",
          time: "Day",
          game_level: "Competitive",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 21,
          stats_total_players: 99
        },
        {
          id: 105,
          location: "Brighton Youth Center",
          city: "Brighton",
          day: " Wednesday",
          time: "Night",
          game_level: "Normal",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 2,
          stats_total_players: 9
        },
        {
          id: 106,
          location: "Barnum Sports Center",
          city: "Arvada",
          day: " Monday",
          time: "Day",
          game_level: "Competitive",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 4,
          stats_total_players: 22
        },
        {
          id: 107,
          location: "Bear Creek Fields",
          city: "Boulder",
          day: " Thursday",
          time: "Night",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 41,
          stats_total_players: 99
        },
        {
          id: 108,
          location: "Boulder High School",
          city: "Boulder",
          day: "Tuesday",
          time: "Morning",
          game_level: "Normal",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 32,
          stats_total_players: 57
        },
        {
          id: 109,
          location: "Carpentar Park",
          city: "Wash Park",
          day: " Thursday",
          time: "Morning",
          game_level: "Competitive",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 12,
          stats_total_players: 39
        },
        {
          id: 110,
          location: "Cheeseman Park",
          city: "Capitol Hill",
          day: " Monday",
          time: "Day",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 80,
          stats_total_players: 256
        },
        {
          id: 111,
          location: "Congress Park",
          city: "Capitol Hill",
          day: "Tuesday",
          time: "Day",
          game_level: "Normal",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 99,
          stats_total_players: 300
        },
        {
          id: 112,
          location: "City Park",
          city: "Denver",
          day: "Tuesday",
          time: "Day",
          game_level: "Normal",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 1,
          stats_total_players: 14
        },
        {
          id: 113,
          location: "Confluence Park",
          city: "LoDo",
          day: " Friday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 44,
          stats_total_players: 15
        },
        {
          id: 114,
          location: "Cuernavaca Park",
          city: "Dnever",
          day: " Wednesday",
          time: "Night",
          game_level: "Open",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 23,
          stats_total_players: 55
        },
        {
          id: 115,
          location: "Colorado Soccer Complex",
          city: "LoDo",
          day: " Sunday",
          time: "Night",
          game_level: "Open",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 59,
          stats_total_players: 55
        },
        {
          id: 116,
          location: "Daniels Athletic Center",
          city: "Ft. Lupton",
          day: " Tuesday",
          time: "Night",
          game_level: "Normal",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 43,
          stats_total_players: 111
        },
        {
          id: 117,
          location: "Dailey Park",
          city: "Greely",
          day: " Friday",
          time: "Day",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 8,
          stats_total_players: 55
        },
        {
          id: 118,
          location: "El Polmar Sports Park",
          city: "Centennial",
          day: " Saturday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 2,
          stats_total_players: 15
        },
        {
          id: 119,
          location: "Englewood Park Center",
          city: "Englewood",
          day: " Sunday",
          time: "Night",
          game_level: "Normal",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 64,
          stats_total_players: 188
        },
        {
          id: 120,
          location: "Gossage Fields",
          city: "Highlands",
          day: " Sunday",
          time: "Night",
          game_level: "Normal",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 77,
          stats_total_players: 244
        },
        {
          id: 121,
          location: "Golden Sports Park",
          city: "Golden",
          day: " Sunday",
          time: "Night",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 49,
          stats_total_players: 154
        },
        {
          id: 122,
          location: "Highlands High",
          city: "Highlands",
          day: " Monday",
          time: "Day",
          game_level: "Open",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 29,
          stats_total_players: 49
        },
        {
          id: 123,
          location: "Hampden Hights Park",
          city: "Windsor",
          day: "Thursday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 32,
          stats_total_players: 69
        },
        {
          id: 124,
          location: "Kennedy Sports Complex",
          city: "Ft. Collins",
          day: " Tuesday",
          time: "Morning",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 19,
          stats_total_players: 64
        },
        {
          id: 125,
          location: "Lonmgont Park",
          city: "Lonmgont",
          day: " Thursday",
          time: "Night",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 9,
          stats_total_players: 46
        },
        {
          id: 126,
          location: "Loveland Youth Fields",
          city: "Loveland",
          day: " Thursday",
          time: "Morning",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 6,
          stats_total_players: 41
        },
        {
          id: 127,
          location: "Littelton Park",
          city: "Littelton",
          day: " Wednesday",
          time: "Morning",
          game_level: "Normal",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 3,
          stats_total_players: 23
        },
        {
          id: 128,
          location: "Meadow Wood Park",
          city: "Co. Springs",
          day: " Monday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 83,
          stats_total_players: 241
        },
        {
          id: 129,
          location: "Memorial Parks",
          city: "Denver",
          day: " Sunday",
          time: "Morning",
          game_level: "Competitive",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 43,
          stats_total_players: 92
        },
        {
          id: 130,
          location: "Northern Athletic Park",
          city: "River North",
          day: "Saturday",
          time: "Night",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 51,
          stats_total_players: 110
        },
        {
          id: 131,
          location: "Nederland Park",
          city: "LoDo",
          day: " Saturdayy",
          time: "Night",
          game_level: "Competitive",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 61,
          stats_total_players: 144
        },
        {
          id: 132,
          location: "Cherry Creek Park",
          city: "Cherry Creek",
          day: "Sunday",
          time: "Day",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 53,
          stats_total_players: 111
        },
        {
          id: 133,
          location: "South Park Park",
          city: "Fairplay",
          day: " Saturday",
          time: "Night",
          game_level: "Open",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 28,
          stats_total_players: 93
        },
        {
          id: 134,
          location: "Pulaski Park",
          city: "Cherry Creek",
          day: " Thursday",
          time: "Day",
          game_level: "Competitive",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 63,
          stats_total_players: 90
        },
        {
          id: 135,
          location: "Platte Park Center",
          city: "Platte Park",
          day: " Saturday",
          time: "Night",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 16,
          stats_total_players: 44
        },
        {
          id: 136,
          location: "Vegeta Sports Park",
          city: "Saiyan",
          day: " Sunday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 22,
          stats_total_players: 49
        },
        {
          id: 137,
          location: "Silver Creek Fields",
          city: "Longmont",
          day: " Saturday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 24,
          stats_total_players: 88
        },
        {
          id: 138,
          location: "Sloan's Lake",
          city: "Sloan's Lake",
          day: " Tuesday",
          time: "Day",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 42,
          stats_total_players: 154
        },
        {
          id: 139,
          location: "RiNo Athletic Fields",
          city: "River North",
          day: " Saturday",
          time: "Morning",
          game_level: "Competitive",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 90,
          stats_total_players: 212
        },
        {
          id: 140,
          location: "Ruby Hill Park",
          city: "Platte Park",
          day: " Sunday",
          time: "Night",
          game_level: "Open",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 11,
          stats_total_players: 41
        },
        {
          id: 141,
          location: "Rocky Mountain Park",
          city: "Denver",
          day: " Saturday",
          time: "Morning",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 53,
          stats_total_players: 133
        },
        {
          id: 142,
          location: "Sedalia Fields",
          city: "Denver",
          day: " Friday",
          time: "Day",
          game_level: "Open",
          field_type: "Hard Court",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 21,
          stats_total_players: 37
        },
        {
          id: 143,
          location: "Stapelton Sports Park",
          city: "Stapelton",
          day: " Friday",
          time: "Night",
          game_level: "Competitive",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 73,
          stats_total_players: 221
        },
        {
          id: 144,
          location: "Park Hill Park",
          city: "Park Hill",
          day: " Wednesday",
          time: "Day",
          game_level: "Normal",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 3,
          stats_total_players: 17
        },
        {
          id: 145,
          location: "Thorton Field",
          city: "Thorton",
          day: " Sunday",
          time: "Night",
          game_level: "Open",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 11,
          stats_total_players: 48
        },
        {
          id: 146,
          location: "Westminster Park",
          city: "Westminster",
          day: " Wednesday",
          time: "Day",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 42,
          stats_total_players: 100
        },
        {
          id: 147,
          location: "Denver Country Club",
          city: "Cherry Creek",
          day: " Saturday",
          time: "Day",
          game_level: "Competitive",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 73,
          stats_total_players: 179
        },
        {
          id: 148,
          location: "Colfax Youth Center",
          city: "Capitol Hill",
          day: " Wednesday",
          time: "Day",
          game_level: "Competitive",
          field_type: "Dirt",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 65,
          stats_total_players: 249
        },
        {
          id: 149,
          location: "Ulysses Park",
          city: "Golden",
          day: " Sunday",
          time: "Night",
          game_level: "Normal",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 33,
          stats_total_players: 98
        },
        {
          id: 150,
          location: "Washington Park",
          city: "Washington Park",
          day: " Monday",
          time: "Night",
          game_level: "Open",
          field_type: "Grass",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 6,
          stats_total_players: 44
        },
        {
          id: 151,
          location: "Boulder Sports Field",
          city: "Boulder",
          day: "Friday",
          time: "Day",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 13,
          stats_total_players: 155
        },
        {
          id: 152,
          location: "Broomfield Fields",
          city: "Broomfield",
          day: "Sunday",
          time: "Morning",
          game_level: "Normal",
          field_type: "Turf",
          field_condition: "Goals",
          field_details: "",
          stats_games_completed: 31,
          stats_total_players: 57
        },
        {
          id: 153,
          location: "Louisville Park Complex",
          city: "Louisville",
          // day selction
          day_monday: false,
          day_tuesday: false,
          day_wednesday: false,
          day_thursday: false,
          day_friday: false,
          day_saturday: false,
          day_sunday: false,
          // time selection
          time_morning: false,
          time_day: false,
          time_night: true,
          // level
          level_open: false,
          level_normal: true,
          level_competitive: false,
          // field type
          surface_grass: false,
          surface_turf: true,
          surface_dirt: false,
          surface_concrete: false,
          // goals
          goals_full: false,
          goals_netless: true,
          goals_none: false,
          // info
          infor_parking:true,
          infor_restrooms: false,
          infor_water:true,
          infor_lights: false,
          // stats
          stats_completed: 45,
          stats_players: 119
        }
      ]);
    })
    .then(() => {
      // starts the next index at 1000
      return knex.raw("ALTER SEQUENCE games_id_seq RESTART WITH 1000;");
    });
};


