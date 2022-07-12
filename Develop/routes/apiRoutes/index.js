const router = require("express").Router();
// must all have the same name 'const db', 'json arry', 'db.json file'
const { db } = require('../../../Develop/db/db');

// const {
//     filterByQuery,
//     findById,
//     createNewZookeeper,
//     validateZookeeper,
//   } = require("../../lib/zookeepers");
  
function findById(id, db) {
    const result = db.filter((db) => db.id === id)[0];
    return result;
  }
  
// router.get("/notes", (req, res) => {
//     let results = notes;
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     res.json(results);
// });

router.get("/notes:id", (req, res) => {
    const result = findById(req.params.id, db);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

// router.delete("/notes/:id", (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

// router.post("/notes", (req, res) => {
//   req.body.id = notes.length.toString();

//   if (!validateZookeeper(req.body)) {
//     res.status(400).send("The not is not properly formatted.");
//   } else {
//     const note = createNewZookeeper(req.body, notes);
//     res.json(notesDB);
//   }
// });

module.exports = router;