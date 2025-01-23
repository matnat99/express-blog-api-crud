const posts = require("../data/postsData");

// Index
const index = (req, res) => {
  let tagsFiltered = posts;
  const { tags } = req.query;
  if (tags) {
    tagsFiltered = tagsFiltered.filter((postElm) => {
      return postElm.tags.includes(tags);
    });
  }

  res.json(tagsFiltered);
};

// Show
const show = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == req.params.id);

  // Guard Condition
  if (!post) {
    return res.sendStatus(404);
  }

  res.json(post);
};

// Store
const store = (req, res) => {
  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    ...req.body /* = title: req.body.title,
                   = image: req.body.image,
                   = tags: req.body.tags,*/,
  };

  posts.push(newPost);

  res.sendStatus(201);
};

// Update
const update = (req, res) => {
  res.send("Modifica integrale del post" + req.params.id);
};

// Modify
const modify = (req, res) => {
  res.send("Modifica parziale del post" + req.params.id);
};

// Destroy
const destroy = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == req.params.id);

  // Guard Condition
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }

  posts.splice(posts.indexOf(post), 1);

  console.log(posts);

  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
