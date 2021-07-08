import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/collage-f83a7/us-central1/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;


