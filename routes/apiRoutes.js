const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const db = 'db/db.json'


router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, db))
});

router.post('/notes', (req, res) => {
    let notes = fs.readFileSync(db)
    notes = JSON.parse(notes)
    console.log(notes);
    console.log(req);
    req.body.id = notes.length.toString();

    //if(req.body.title && req.body.text) {
        
    //}
})


module.exports = router;