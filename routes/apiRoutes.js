const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();

router.get("/notes",(req,res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
} )
router.post("/notes",(req,res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const addNotes = req.body;
    addNotes.id = uuid.v4();
    notes.push(addNotes);
    fs.writeFileSync("./db/db.json",JSON.stringify(notes));
    res.json(addNotes);
})
router.delete("/notes/:id",(req,res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const eraseNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(eraseNote));
    res.json(eraseNote);
})
module.exports = router;
