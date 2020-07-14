const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    }).then((data) => data.json());
  },
  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedLocation),
    }).then((data) => data.json());
  },
  // Add this method to the AnimalManager object
  getRandomId() {
    return fetch(`${remoteURL}/locations`)
      .then((result) => result.json())
      .then((locations) => {
        const randomIndex = Math.floor(Math.random() * locations.length);
        const randomLocation = locations[randomIndex];
        return randomLocation.id;
      });
  },
};
