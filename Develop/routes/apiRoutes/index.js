const router = require("express").Router();
const { query } = require("express");
// must all have the same name 'const db', 'json arry', 'db.json file'
const { db } = require('../../../Develop/db/db');

// const {
//     filterByQuery,
//     findById,
//     createNewZookeeper,
//     validateZookeeper,
//   } = require("../../lib/zookeepers");
  
// get all notes
router.get("/notes", (req, res) => {
    let results = db;
    res.json(results);
});

router.get("/notes:id", (req, res) => {
  const result = db.filter((db) => db.id === req.query.id)[0];
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
//   const note = createNewNote(req.body, notes);
//   res.json(notesDB);
// });

// function createNewNote(body, notes) {
//   const zookeeper = body;
//   notes.push(zookeeper);
//   fs.writeFileSync(
//     path.join(__dirname, "../data/zookeepers.json"),
//     JSON.stringify({ notes }, null, 2)
//   );
//   return zookeeper;
// }

module.exports = router;