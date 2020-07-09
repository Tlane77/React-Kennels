const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
};
