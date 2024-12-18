const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"plantsDatabase",
  port:3308
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// app.get('/:id/:name', (req, res) => {
//   res.send(`ello ello ello ${req.params.id}`)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//@ POST
// app.post("/plants", (req,res)=>{
//     let sql;
//     sql=`
//     INSERT INTO plants
//     (name, height, type)
//     VALUES (
//     '${req.body.name}',
//     '${req.body.height}',
//     '${req.body.type}'
//     )
//     `;
//     connection.query(sql);
//     res.json({message:"OK"});
// })

// @ POST SAFE
app.post("/plants", (req,res)=>{
        let sql;
        sql=`
        INSERT INTO plants
        (name, height, type)
        VALUES (
        ?,
        ?,
        ?
        )
        `;
        connection.query(sql, [req.body.name, req.body.height, req.body.type]);
        res.json({message:"OK"});
    })