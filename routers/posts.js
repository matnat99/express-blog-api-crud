const express = require("express");
const posts = require("../data/postsData");
const router = express.Router();

// Index
router.get('/', function (req, res) {
    res.json(posts);
    })
  
// Show
router.get('/:id', function (req, res) {

    // Guard Condition
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }

    const post = posts.find((postElm) => postElm.id == req.params.id)

    // Guard Condition
    if(!post){
        return res.sendStatus(404)
    }

    res.json(post);
})

// Store
router.post('/', function (req, res) {
  res.send('Creazione nuovo post');
})

// Update
router.put('/:id', function (req, res) {
  res.send('Modifica integrale del post' + req.params.id);
})

// Modify
router.patch('/:id', function (req, res) {
  res.send('Modifica parziale del post' + req.params.id);
})

// Destroy
router.delete('/:id', function (req, res) {
  res.send('Eliminazione del post' + req.params.id);
})

module.exports = router