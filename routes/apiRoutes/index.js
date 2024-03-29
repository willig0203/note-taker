const fs = require("fs");
const path = require("path");
const router = require("express").Router();

const { db } = require("../../db/db");
const fileName = "../../db/db.json";

const { v4: uuidv4 } = require("uuid");

const util = require("util");
const readFromFile = util.promisify(fs.readFile);
// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );

// get all notes
router.get("/notes", (req, res) => {
  // let results = db;
  // res.json(results);

  readFromFile(path.join(__dirname, fileName)).then((data) =>
    res.json(JSON.parse(data))
  );
});

router.delete("/notes:id", (req, res) => {
  const id = req.params.id.replace(":", "");
  const result = db.filter((db) => db.id === id);

  if (result) {
    const index = db.findIndex((x) => x.id === id);
    const newdb = new Array();

    if (index !== undefined) {
      for (var i = 0; i < db.length; i++) {
        if (i !== index) {
          newdb.push(db[i]);
        }
      }

      fs.writeFileSync(
        path.join(__dirname, fileName),
        JSON.stringify({ db: newdb }, null, 2)
      );
    }
    res.json(result); // deleted item
  } else {
    res.sendStatus(404);
  }
});

router.post("/notes", (req, res) => {
  const note = req.body;
  note.id = uuidv4();
  db.push(note);
  fs.writeFileSync(
    path.join(__dirname, fileName),
    JSON.stringify({ db }, null, 2)
  );
  res.json(note);
});

module.exports = router;
