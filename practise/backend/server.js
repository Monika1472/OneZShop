const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Moni@1402',
  database: 'Onezdb',
});

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.post('/register', (req, res) => {
//     const { userName, email, userPassword } = req.body;
  
//     const sql = 'INSERT INTO login (userName, email, userPassword) VALUES (?, ?, ?)';
//     db.query(sql, [userName, email, userPassword], (err,result) => {
//       if (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Error registering user');
//       } else {
//         res.status(200).send('User registered successfully');
//       }
//     });
//   });
app.post('/register', (req, res) => {
  // const { userName, email, userPassword } = req.body;

  // Check if the email already exists
  const emailCheckQuery = 'SELECT * FROM login WHERE email = ?';
  db.query(emailCheckQuery, [req.body.email], (emailCheckErr, emailCheckResult) => {
      if (emailCheckErr) {
          console.error('Error checking email:', emailCheckErr);
          res.status(500).send('Error checking email');
      } else {
          if (emailCheckResult.length > 0) {
              // Email already exists, return an error
              res.status(400).send('Email already registered');
          } else {
              // Email is unique, proceed with registration
              const insertQuery = 'INSERT INTO login (userName, email, userPassword) VALUES (?, ?, ?)';
              db.query(insertQuery, [req.body.userName, req.body.email, req.body.userPassword], (insertErr, insertResult) => {
                  if (insertErr) {
                      console.error('Error registering user:', insertErr);
                      res.status(500).send('Error registering user');
                  } else {
                      res.status(200).send('User registered successfully',insertResult);
                  }
              });
          }
      }
  });
});

app.post('/Login',(req,res)=>{
    const sql="select * from login where email=? and userPassword=?";
    db.query(sql,[req.body.email,req.body.userPassword],(err,data)=>{
        if(err) return res.json("login failed");
        if(data.length>0)
        {
            return res.json("Login Sucesss!!");
        }
        else{
            return res.json("No record");
        }
    })
})
  

