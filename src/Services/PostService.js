import axios from "axios";

export default class PostService {
  static async getAll() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return await axios.get(url);
  }

  static async queryPosts(limit = 10, page = 1) {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return await axios.get(url, {
      params: {
        _limit: limit,
        _page: page
      }
    });
  }
}