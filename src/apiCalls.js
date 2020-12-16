export const getData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(resp => resp.json())
}

export const postData = (newRes) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newRes)
  })
  .then(resp => resp.json());
}

export const deleteData = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: `${id}` })
  })
  .then(resp => resp.json());
}
