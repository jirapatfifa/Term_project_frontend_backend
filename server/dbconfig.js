var dbconfig = {
    development: {
      //connectionLimit : 10,
      host: "localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "term_project",
    },
    production: {
      //connectionLimit : 10,
      host: "localhost",
      port: "3306",
      user: "dbuser66",
      password: "P@ssw0rd",
      database: "user66006_db",
    },
  };
  //แก้ user ให้ถูกต้อง
  module.exports = dbconfig;
  