module.exports = {
    HOST: "172.16.2.20",
    USER: "witcha",
    PASSWORD: "watt8ba3",
    DB: "witcha_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };