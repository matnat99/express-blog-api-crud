const posts = require("../data/postsData");

const checkPostExists = (req, res, next) => {
  const { id } = req.params;

  const post = posts.find((postElm) => postElm.id == req.params.id);

  // Guard Condition
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }

  next();
};

module.exports = checkPostExists;
