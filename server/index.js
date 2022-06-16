require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

//db connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//db connection confirmation
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("DB Connected...");
});

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

//routes

//get all users
app.get("/api/get", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//get user by id
app.get("/api/get/:id", (req, res) => {
  const sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//create user
app.post("/api/add", (req, res) => {
  const sql = `INSERT INTO users (username, email, password) 
  VALUES ('${req.body.username}', '${req.body.email}', '${req.body.password}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//update user
app.put("/api/edit/:id", (req, res) => {
  const sql = `UPDATE users SET username = '${req.body.username}',
  email = '${req.body.email}', password = '${req.body.password}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});



//delete user
app.delete("/api/delete/:id", (req, res) => {
    const sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.send(result);
    }
    );
}
);

//start server

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
