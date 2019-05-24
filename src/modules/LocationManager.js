const remoteURL = "http://localhost:5002"

export default {
    get(id) {
      return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
    },
    getAll() {
      return fetch(`${remoteURL}/locations`).then(e => e.json())
    },
    deleteLocation(id) {
      return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      }).then(e => e.json())
    },
    postLocation(location){
      return fetch(`${remoteURL}/locations`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location)
      }).then(e => e.json())
    },
    put(editedAnimal) {
      return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedAnimal)
      }).then(data => data.json());
    }
  }
  
