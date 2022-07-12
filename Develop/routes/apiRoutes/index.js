const router = require("express").Router();
// const { notes } = require("../../db/");

// router.get("/notes", (req, res) => {
//   let results = notes;
//   if (req.query) {
//     results = filterByQuery(req.query, results);
//   }
//   res.json(results);
// });

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