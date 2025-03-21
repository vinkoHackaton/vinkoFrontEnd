export const getCompanionById = async (id) => {
  return fetch(`http://localhost:8080/api/companions/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const getAllCompanions = async () => {
  return fetch("http://localhost:8080/api/companions")
    .then((res) => res.json())
    .then((data) =>{
      return data;
    })
    .catch((err) => console.error(err));
};
