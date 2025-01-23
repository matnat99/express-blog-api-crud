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
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == req.params.id);

  // Guard Condition
  if (!post) {
    return res.sendStatus(404);
  }

  post.title = req.body.title;
  post.image = req.body.image;
  post.tags = req.body.tags;

  res.json(post);
};

// Modify
const modify = (req, res) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == req.params.id);

  // Guard Condition
  if (!post) {
    return res.sendStatus(404);
  }

  if (req.body.title) {
    post.title = req.body.title;
  }
  if (req.body.image) {
    post.image = req.body.image;
  }
  if (req.body.tags) {
    post.tags = req.body.tags;
  } /*= post = {
       ...post,
       ...req.body,
      } con post dichiarato con una let*/

  res.json(post);
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
