import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .post("", this.create)
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async create(req, res, next) {
    try {
      let post = await postsService.create(req.body);
      return res.send(post);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      let posts = await postsService.getAll();
      return res.send(posts);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      let post = await postsService.getOne(req.params.id);
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let post = await postsService.edit(req.params.id, req.body);
      return res.send(post);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let message = await postsService.delete(req.params.id);
      return res.send();
    } catch (error) {
      next(error);
    }
  }
}
