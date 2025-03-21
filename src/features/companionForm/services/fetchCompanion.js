const headers = { "Content-Type": "application/json" };

export const createCompanion = (body) => {
  fetch("http://localhost:8080/api/companions", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

export const getCompanionById = async (id) => {
  fetch(`http://localhost:8080/api/companions/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

export const getAllCompanions = () => {
  fetch("http://localhost:8080/api/companions")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

export const deleteCompanionById = (id) => {
    fetch(`http://localhost:8080/api/companions/${id}`, {
        method: 'DELETE',
        headers: headers,
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

export const updateCompanion = (id, body) => {
    fetch(`http://localhost:8080/api/companions/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}