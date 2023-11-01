const API_SERVER = 'http://localhost:8080';

export const getProducts = () => {
  return fetch(`${API_SERVER}/products`).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  });
};

export const getProductById = (id) => {
  return fetch(`${API_SERVER}/products/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  });
};

export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
