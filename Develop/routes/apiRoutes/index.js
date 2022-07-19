// const fs = require('fs');
// const path = require('path');
// const router = require("express").Router();
// const { query } = require("express");

// const { v4: uuidv4 } = require('uuid');
// // uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// // must all have the same name 'const db', 'json arry', 'db.json file'
// const { db } = require('../../../Develop/db/db');


// // get all notes
// router.get("/notes", (req, res) => {
//   let results = db;
//   res.json(results);
// });

// // router.delete("/notes:id", (req, res) => {
// //   const result = db.filter((db) => db.id === req.query.id)[0];
// //   if (result) {
// //     res.json(result);
// //   } else {
// //     res.send(404);
// //   }
// // });

// router.post("/notes", (req, res) => {
//   const note = req.body;
//   note.id = uuidv4();
//   fs.readFile('../../../Develop/db/db.json', 'utf8', function(err, data){
      
//     // Display the file content
//     console.log(data);
// });
//   db.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, db),
//     JSON.stringify({ note }, null, 2)
//   );
// });

// module.exports = router;