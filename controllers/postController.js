const posts = require("../data/postsData");

// Index
const index = (req, res) =>{
    res.json(posts);
}

// Show
const show = (req, res) =>{

    const post = posts.find((postElm) => postElm.id == req.params.id)

    // Guard Condition
    if(!post){
        return res.sendStatus(404)
    }

    res.json(post);
}

// Store
const store = (req, res) =>{
    res.send('Creazione nuovo post');
}

// Update
const update = (req, res) =>{
    res.send('Modifica integrale del post' + req.params.id);
}

// Modify
const modify = (req, res) =>{
    res.send('Modifica parziale del post' + req.params.id);
}

// Destroy
const destroy = (req, res) =>{
    res.send('Eliminazione del post' + req.params.id);
  }

module.exports = {index, show, store, update, modify, destroy};