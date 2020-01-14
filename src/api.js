const url = "http://127.0.0.1:8000/charts/";

export const fetchCharts = async () => {
  //export const fetchCharts = async (token) => {
  return fetch(url, {
    /*
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }*/
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });
};
