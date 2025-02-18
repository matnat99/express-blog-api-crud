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

  const post = posts.find((postElm) => postElm.id === id);

  if (!post) {
    return res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }

  res.json(post);
};

// Store
const store = (req, res) => {
  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    ...req.body /* = title: req.body.title,
                   = content: req.body.content,
                   = image: req.body.image,
                   = tags: req.body.tags,*/,
  };

  posts.push(newPost);

  res.sendStatus(201);
};

// Update
const update = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id === id);

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  if (!post) {
    return res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }

  res.json(post);
};

// Modify
const modify = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id === id);

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.image = req.body.image || post.image;
  post.tags = req.body.tags || post.tags;

  if (!post) {
    return res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }

  res.json(post);
};

// Destroy
const destroy = (req, res) => {
  const { id } = req.params;

  const post = posts.findIndex((postElm) => postElm.id === id);

  if (post < 0) {
    return res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }

  posts.splice(posts, 1);

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
