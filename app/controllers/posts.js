const Post = require("../models/posts");

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Post.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const POST_MODEL = {
      post_title: req.body.post_title,
      post_text: req.body.post_text,
      post_pic: req.body.post_pic,
      user_id: req.body.user_id,
    };
    
    try {
      
      const post = await Post.create(POST_MODEL);
      console.log("Post created");
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const POST_MODEL = {
      post_title: req.body.post_title,
      post_text: req.body.post_text,
      post_pic: req.body.post_pic,
      user_id: req.body.user_id,
    };

    try {
      const post = await Post.update(POST_MODEL, {
        where: { post_id: req.params.id },
      });
      return res.status(200).json(post);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await Post.destroy({ where: { post_id: req.params.id } });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
};
