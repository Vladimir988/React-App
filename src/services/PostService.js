import axios from "axios";

export default class PostService {
  static url = 'https://jsonplaceholder.typicode.com/posts';

  static async getAll() {
    return await axios.get(this.url);
  }

  static async queryPosts(limit = 10, page = 1) {
    return await axios.get(this.url, {
      params: {
        _limit: limit,
        _page: page
      }
    });
  }

  static async queryPostById(id) {
    return await axios.get(this.url + `/${id}`);
  }

  static async queryCommentsById(id) {
    return await axios.get(this.url + `/${id}/comments`);
  }
}