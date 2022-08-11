const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { query } = require("express");
const { db } = require("../../db/db");

const { v4: uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// get all notes
router.get("/notes", (req, res) => {
  let results = db;
  res.json(results);
});

router.delete("/notes:id", (req, res) => {
  const id = req.params.id.replace(":", "");
  const result = db.filter((db) => db.id === id);

  if (result) {
    res.json(result); // deleted item
    const index = db.findIndex((x) => x.id === id);
    const newdb = new Array();

    if (index !== undefined) {
      for (var i = 0; i < db.length; i++) {
        if (i !== index) {
          newdb.push(db[i]);
        }
      }

      fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ db: newdb }, null, 2)
      );
    }
  } else {
    res.sendStatus(404);
  }
});

router.post("/notes", (req, res) => {
  const note = req.body;
  note.id = uuidv4();
  fs.readFile("../../../Develop/db/db.json", "utf8", function (err, data) {
    // Display the file content
    console.log(data);
  });
  db.push(note);
  fs.writeFileSync(path.join(__dirname, db), JSON.stringify({ note }, null, 2));
});

module.exports = router;
