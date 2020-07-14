const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newOwner) {
    return fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOwner),
    }).then((data) => data.json());
  },
  update(editedOwner) {
    return fetch(`${remoteURL}/owners/${editedOwner.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedOwner),
    }).then((data) => data.json());
  },
  // Add this method to the AnimalManager object
  getRandomId() {
    return fetch(`${remoteURL}/owners`)
      .then((result) => result.json())
      .then((owners) => {
        const randomIndex = Math.floor(Math.random() * owners.length);
        const randomOwner = owners[randomIndex];
        return randomOwner.id;
      });
  },
};
