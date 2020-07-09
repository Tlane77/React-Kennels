const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/employee/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/employee`).then((result) => result.json());
  },
};
