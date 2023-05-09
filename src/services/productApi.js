import api from './api';

export async function getProductsType(token) {
  const response = await api.get('/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function getProductsByTypeId(token, productTypeId) {
    const response = await api.get(`/products/${productTypeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  export async function getProductsById(token, productId) {
    const response = await api.get(`/products/info/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };