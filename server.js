const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();
const inputCheck = require('./utils/inputCheck');




// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/operations.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the company database.');
  });

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });



  
  app.get('/', (req, res) => {
    res.json({
      message: ' Welcome'
    });
  });

  

  // Get all departments
app.get('/api/departments', (req, res) => {
  const sql = `SELECT * FROM departments`;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});


// Get single departments
app.get('/api/department/:dep_id', (req, res) => {
  const sql = `SELECT * FROM departments 
               WHERE dep_id = ?`;
  const params = [req.params.dep_id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: row
    });
  });
});


// Delete a department
app.delete('/api/department/:dep_id', (req, res) => {
  const sql = `DELETE FROM departments WHERE dep_id = ?`;
  const params = [req.params.dep_id];
  db.run(sql, params, function(err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }

    res.json({
      message: 'successfully deleted',
      changes: this.changes
    });
  });
});


// Create a department
app.post('/api/department', ({ body }, res) => {
  const errors = inputCheck(body, 'dep_name');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO departments (dep_name) 
            VALUES (?)`;
const params = [body.dep_name];
// ES5 function, not arrow function, to use `this`
db.run(sql, params, function(err, result) {
if (err) {
  res.status(400).json({ error: err.message });
  return;
}

res.json({
  message: 'success',
  data: body,
  dep_id: this.lastID
});
});

});


//Departments end here

  // Get all employees
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
    const params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: rows
      });
    });
  });


// Get single employees
app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT * FROM employees 
                 WHERE id = ?`;
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: row
      });
    });
  });
  

  // Delete a employee
app.delete('/api/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];
    db.run(sql, params, function(err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
  
      res.json({
        message: 'successfully deleted',
        changes: this.changes
      });
    });
  });
  

// Create a employee
app.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name','job_titles','salaries', 'department','manager');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

    const sql = `INSERT INTO employees (first_name, last_name,job_titles,salaries, department,manager) 
              VALUES (?,?,?,?,?,?)`;
const params = [body.first_name, body.last_name, body.job_titles, body.salaries,body.department,body.manager];
// ES5 function, not arrow function, to use `this`
db.run(sql, params, function(err, result) {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  res.json({
    message: 'success',
    data: body,
    id: this.lastID
  });
});

  });


  // Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });