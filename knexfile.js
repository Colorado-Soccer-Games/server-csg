module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///capstone"
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
