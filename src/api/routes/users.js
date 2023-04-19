const express = require("express");
const db = require("../db");
const router = express.Router();
const md5 = require("md5");

// Get all users
router.get("/", function (req, res, next) {
  var sql = "select * from users";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get a user by id
router.get("/:id", function (req, res, next) {
  const sql = "select * from users where id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Get a user by email and password
router.post("/login", function (req, res, next) {
  const params = [req.body.email, md5(req.body.password)];
  const sql = `select * from users where email = ? and password = ?`;
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Create a new user
router.post("/user", function (req, res, next) {
  let errors = [];

  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  const data = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
  };

  const sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
  const params = [data.name, data.email, data.password];

  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "User Created Successfully",
      data: data,
      id: this.lastID,
    });
  });
});

// Update a user by id
router.put("/:id", function (req, res, next) {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? md5(req.body.password) : null,
  };
  db.run(
    `UPDATE users set 
       name = COALESCE(?,name), 
       email = COALESCE(?,email), 
       password = COALESCE(?,password) 
       WHERE id = ?`,
    [data.name, data.email, data.password, req.params.id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// Delete a user by id
router.delete("/:id", function (req, res, next) {
  db.run(
    "DELETE FROM users WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});

module.exports = router;
