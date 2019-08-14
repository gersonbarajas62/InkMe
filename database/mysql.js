const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'inkme',
    database: 'inkplace'
};

const connection = mysql.createConnection(config);

const getStyles = cb => {
    return new Promise ((resolve, reject) => {
        connection.query("SELECT * FROM styles", (err, result) =>{
            if (err) {
                return reject(err);
            };
            return resolve(result);
        })
    });
};

const getDays = cb => {
    connection.query("SELECT apptDate FROM appointments", (error, results) => {
      if (error) {
        throw error;
      } else {
        console.log(results)
        cb(results);
      }
    });
  };


const imagesByStyle = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("SELECT url FROM images", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};

const getUser = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("INSERT INTO users (email,name) VAlUES (?,?)  ", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};

/*
const getApp = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("INSERT INTO appointments (clientName, email, bodyPart, studio) VALUES ("Yidah", "waitingoutthewinter22012@yahoo.com", "Lower Arm", "studio onix");
", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};
*/

module.exports = {
getStyles,
imagesByStyle ,
getUser,
getDays,
};

