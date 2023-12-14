import axios from "axios";

export default class PostService {
  static async getAll() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}