const express = require("express");
const db = require("../db");
const router = express.Router();

// Get all tasks
router.get("/", function (req, res, next) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  });
  var sql = "select * from tasks";
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

// Get all tasks by user id
router.get(`/user/:id`, function (req, res, next) {
  const sql = "select * from tasks where user_id = ?";
  const params = [req.params.id];
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

// Get a task by id
router.get(`/:id`, function (req, res, next) {
  const sql = "select * from tasks where id = ?";
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

// Create a new task
router.post(`/task`, function (req, res, next) {
  const data = {
    title: req.body.title,
    description: req.body.description,
    is_done: false,
    user_id: req.body.user_id,
  };

  const sql =
    "INSERT INTO tasks (title, description, is_done, user_id) VALUES (?,?,?,?)";
  const params = [data.title, data.description, data.is_done, data.user_id];

  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

// Update a task by id
router.put(`/:id`, function (req, res, next) {
  const data = {
    title: req.body.title,
    description: req.body.description,
    is_done: req.body.is_done,
    user_id: req.body.user_id,
  };

  db.run(
    `UPDATE tasks set 
       title = COALESCE(?,title), 
       description = COALESCE(?,description), 
       is_done = COALESCE(?,is_done),
       user_id = COALESCE(?,user_id) 
       WHERE id = ?`,
    [data.title, data.description, data.is_done, data.user_id, req.params.id],
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

// Delete a task by id
router.delete("/:id", function (req, res, next) {
  db.run(
    "DELETE FROM tasks WHERE id = ?",
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
